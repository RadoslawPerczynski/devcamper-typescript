import { Request, Response, NextFunction } from 'express';

/**
 * @desc Get all bootcamps
 * @route GET api/v1/bootcamps
 * @access Public
 */
export const getAllBootcamps = (req: Request, res: Response) => {
  res.status(200).json({ success: true, msg: 'Get all Bootcamps' });
};

/**
 * @desc Get single bootcamp
 * @route GET api/v1/bootcamp/:id
 * @access Public
 */
export const getBootcamp = (req: Request, res: Response) => {
  const bootcampID: string = req.params.id;
  res
    .status(200)
    .json({ success: true, msg: `Get Single Bootcamp by ID: ${bootcampID}` });
};

/**
 * @desc Create a new bootcamp
 * @route POST api/v1/bootcamps
 * @access Private
 */
export const createBootcamp = (req: Request, res: Response) => {
  res.status(200).json({ success: true, msg: 'Create a new bootcamp' });
};

/**
 * @desc Update a bootcamp
 * @route PUT api/v1/bootcamp/:id
 * @access Private
 */
export const updateBootcamp = (req: Request, res: Response) => {
  const bootcampID: string = req.params.id;
  res
    .status(200)
    .json({ success: true, msg: `Update the bootcamp of ID: ${bootcampID}` });
};

/**
 * @desc Delete bootcamp
 * @route DELETE api/v1/bootcamp/:id
 * @access Private
 */
export const deleteBootcamp = (req: Request, res: Response) => {
  const bootcampID: string = req.params.id;
  res
    .status(200)
    .json({ success: true, msg: `Delete the bootcamp of ID: ${bootcampID}` });
};
