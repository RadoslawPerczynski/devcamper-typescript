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
  getAllBootcamps(req: Request, res: Response) {
    res.status(200).json({ success: true, msg: 'Get all Bootcamps' });
  }

  /**
   * @desc Get single bootcamp
   * @route GET api/v1/bootcamp/:id
   * @access Public
   */
  getBootcamp(req: Request, res: Response) {
    const bootcampID: string = req.params.id;
    res
      .status(200)
      .json({ success: true, msg: `Get Single Bootcamp by ID: ${bootcampID}` });
  }

  /**
   * @desc Create a new bootcamp
   * @route POST api/v1/bootcamps
   * @access Private
   */
  async createBootcamp(req: Request, res: Response) {
    const newBootcamp = new BootcampModel(req.body);

    // const bootcampSaved = await newBootcamp.save();
    await newBootcamp.save((err) => {
      if (err) {
        return res
          .status(400)
          .json({ success: false, msg: err.message, name: err.name });
      } else {
        res.status(201).json({ success: true, data: newBootcamp });
      }
    });

    // const bootcamp = await BootcampModel.create(req.body); // this is working
  }

  /**
   * @desc Update a bootcamp
   * @route PUT api/v1/bootcamp/:id
   * @access Private
   */
  updateBootcamp(req: Request, res: Response) {
    const bootcampID: string = req.params.id;
    res
      .status(200)
      .json({ success: true, msg: `Update the bootcamp of ID: ${bootcampID}` });
  }

  /**
   * @desc Delete bootcamp
   * @route DELETE api/v1/bootcamp/:id
   * @access Private
   */
  deleteBootcamp(req: Request, res: Response) {
    const bootcampID: string = req.params.id;
    res
      .status(200)
      .json({ success: true, msg: `Delete the bootcamp of ID: ${bootcampID}` });
  }
}

export const bootcampController = new BootcampController();
