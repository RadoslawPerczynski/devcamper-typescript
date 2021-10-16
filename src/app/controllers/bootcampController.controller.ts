import { Request, Response, NextFunction } from 'express';
import { CallbackError } from 'mongoose';
import { BootcampModel } from '../models/bootcampModel.model';
import { ErrorResponse } from '../utils/errorResponse';

class BootcampController {
  /**
   * @desc Get all bootcamps
   * @route GET api/v1/bootcamps
   * @access Public
   */
  async getAllBootcamps(req: Request, res: Response, next: NextFunction) {
    try {
      const allBootcamps = await BootcampModel.find({});
      return res.status(200).json({
        success: true,
        count: allBootcamps.length,
        data: allBootcamps,
      });
    } catch (error) {
      return next(error);
    }
  }

  /**
   * @desc Get single bootcamp
   * @route GET api/v1/bootcamp/:id
   * @access Public
   */
  async getBootcamp(req: Request, res: Response, next: NextFunction) {
    const bootcampID: string = req.params.id;

    try {
      const foundBootcamp = await BootcampModel.findById(bootcampID);

      if (!foundBootcamp) {
        return next(
          new ErrorResponse(
            `Bootcamp id correctly formatted, but not found with id of ${req.params.id}`,
            404
          )
        );
      }

      return res.status(200).json({ success: true, data: foundBootcamp });
    } catch (error) {
      next(error);
    }
  }

  /**
   * @desc Create a new bootcamp
   * @route POST api/v1/bootcamps
   * @access Private
   */
  async createBootcamp(req: Request, res: Response, next: NextFunction) {
    // DELEGATE THIS LOGIC TO A SERVICE!
    const newBootcamp = new BootcampModel(req.body);

    try {
      await newBootcamp.save();
      return res.status(201).json({ success: true, data: newBootcamp });
    } catch (error: any) {
      next(error);
    }
  }

  /**
   * @desc Update a bootcamp
   * @route PUT api/v1/bootcamp/:id
   * @access Private
   */
  async updateBootcamp(req: Request, res: Response, next: NextFunction) {
    const bootcampID: string = req.params.id;
    const bootcampDataToUpdate = req.body;

    try {
      const updatedBootcamp = await BootcampModel.findByIdAndUpdate(
        bootcampID,
        bootcampDataToUpdate,
        { new: true, runValidators: true }
      );

      if (!updatedBootcamp) {
        return next(
          new ErrorResponse(
            `Bootcamp id correctly formatted, but not found with id of ${req.params.id}`,
            404
          )
        );
      }

      return res.status(200).json({ success: true, data: updatedBootcamp });
    } catch (error) {
      next(error);
    }
  }

  /**
   * @desc Delete bootcamp
   * @route DELETE api/v1/bootcamp/:id
   * @access Private
   */
  async deleteBootcamp(req: Request, res: Response, next: NextFunction) {
    const bootcampID: string = req.params.id;

    try {
      const bootcampToDelete = await BootcampModel.findByIdAndDelete(
        bootcampID
      );

      if (!bootcampToDelete) {
        return next(
          new ErrorResponse(
            `Bootcamp id correctly formatted, but not found with id of ${req.params.id}`,
            404
          )
        );
      }

      return res.status(200).json({ success: true, data: {} });
    } catch (error) {
      next(error);
    }
  }
}

export const bootcampController = new BootcampController();
