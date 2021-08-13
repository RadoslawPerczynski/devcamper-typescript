// class BootcampController {
//   getAllBootcamps() {
//     const all = [
//       {
//         name: 'I am the bootcamp 1',
//       },
//       {
//         name: 'I am the bootcamp 2',
//       },
//     ];
//   }
// }

// export { BootcampController };

import { Request, Response, NextFunction } from 'express';
export const getAllBootcamps = (req: Request, res: Response) => {
  const all = [
    {
      name: 'I am the bootcamp 1',
    },
    {
      name: 'I am the bootcamp 2',
    },
  ];
  res.status(500).send(all);
};
