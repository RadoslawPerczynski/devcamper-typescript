import { Request, Response, NextFunction } from 'express';
import { BootcampModel } from '../models/bootcampModel.model';

class BootcampController {
  /**
   * @desc Get all bootcamps
   * @route GET api/v1/bootcamps
   * @access Public
   */
  // getAllBootcamps = (req: Request, res: Response) => {
  //   res.status(200).json({ success: true, msg: 'Get all Bootcamps' });
  // };
  async getAllBootcamps(req: Request, res: Response) {
    try {
      const allBootcamps = await BootcampModel.find({});
      return res
        .status(200)
        .json({
          success: true,
          count: allBootcamps.length,
          data: allBootcamps,
        });
    } catch (error) {
      return res.status(400).json({ success: false, msg: error });
    }
  }

  /**
   * @desc Get single bootcamp
   * @route GET api/v1/bootcamp/:id
   * @access Public
   */
  async getBootcamp(req: Request, res: Response) {
    const bootcampID: string = req.params.id;

    try {
      const foundBootcamp = await BootcampModel.findById(bootcampID);

      if (!foundBootcamp) {
        return res.status(400).json({
          success: false,
          msg: 'correctly formatted ID but not found',
        });
      }

      return res.status(200).json({ success: true, data: foundBootcamp });
    } catch (error) {
      return res.status(400).json({ success: false, msg: error });
    }
  }

  /**
   * @desc Create a new bootcamp
   * @route POST api/v1/bootcamps
   * @access Private
   */
  async createBootcamp(req: Request, res: Response) {
    // DELEGATE THIS LOGIC TO A SERVICE!
    const newBootcamp = new BootcampModel(req.body);

    // const bootcampSaved = await newBootcamp.save();

    // here we have access to the error props- this seems to be according to doc
    // newBootcamp.save((err) => {
    //   if (err) {
    //     return res
    //       .status(400)
    //       .json({ success: false, msg: err.message, name: err.name });
    //   } else {
    //     res.status(201).json({ success: true, data: newBootcamp });
    //   }
    // });

    // with this try-catch we don't have access to the error props because TS doesn't know the error.
    try {
      await newBootcamp.save();
      return res.status(201).json({ success: true, data: newBootcamp });
    } catch (error) {
      return res.status(400).json({ success: false, msg: error });
    }
  }

  /**
   * @desc Update a bootcamp
   * @route PUT api/v1/bootcamp/:id
   * @access Private
   */
  async updateBootcamp(req: Request, res: Response) {
    const bootcampID: string = req.params.id;
    const bootcampDataToUpdate = req.body;

    try {
      const updatedBootcamp = await BootcampModel.findByIdAndUpdate(
        bootcampID,
        bootcampDataToUpdate,
        { new: true, runValidators: true }
      );

      if (!updatedBootcamp) {
        return res.status(400).json({
          success: false,
          msg: 'correctly formatted ID but not found',
        });
      }

      return res.status(200).json({ success: true, data: updatedBootcamp });
    } catch (error) {
      return res.status(400).json({ success: false, msg: error });
    }
  }

  /**
   * @desc Delete bootcamp
   * @route DELETE api/v1/bootcamp/:id
   * @access Private
   */
  async deleteBootcamp(req: Request, res: Response) {
    const bootcampID: string = req.params.id;

    try {
      const bootcampToDelete = await BootcampModel.findByIdAndDelete(
        bootcampID
      );

      if (!bootcampToDelete) {
        return res.status(400).json({
          success: false,
          msg: 'correctly formatted ID but not found',
        });
      }

      return res.status(200).json({ success: true, data: {} });
    } catch (error) {
      return res.status(400).json({ success: false, msg: error });
    }
  }
}

export const bootcampController = new BootcampController();
