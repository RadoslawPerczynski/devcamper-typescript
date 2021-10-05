// type UsersDependencies = {
//   usersRepository: UsersRepository
//   mailer: Mailer
//   logger: Logger
// };

// export class UsersService {
//   constructor(
//     private dependencies: UsersDependencies
//   ) {}

//   async findAll() {
//     return this.dependencies.usersRepository.findAll();
//   }

//   async addUser(user) {
//     await this.dependencies.usersRepository.addUser(user);
//     this.dependencies.logger.info(`User created: ${user}`);
//     await this.dependencies.mailer.sendConfirmationLink(user);
//     this.dependencies.logger.info(`Confirmation link sent: ${user}`);
//   }
// }

// const usersService = new UsersService({
//   usersRepository,
//   mailer,
//   logger
// });
