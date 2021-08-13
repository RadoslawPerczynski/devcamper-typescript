import { Request, Response, NextFunction } from 'express';
export const getAllCourses = (req: Request, res: Response) => {
  const all = [
    {
      name: 'Course 1',
    },
    {
      name: 'Course 2',
    },
  ];
  res.status(500).send(all);
};
