import express from 'express';
import UsersController from '../controllers/users.controller';

const UsersRoutes = express.Router();

UsersRoutes.route('/')
  /**
   * Get athletes via search params
   * @group Athletes - Operations to manipulate Athletes
   * @operationId athletesGet
   * @route GET /api/athletes
   * @produces application/json
   * @param {string} name.query - Athlete's name
   * @param {string} ageRangeStart.query - Athlete's age range start
   * @param {string} ageRangeEnd.query - Athlete's age range end
   * @param {Array.<string>} skills.query - Athlete's skills
   * @param {number} professionalExperienceYears.query - Athlete's years of professional experience
   * @returns {Array.<Athlete>} 200 - Athletes
   * @returns {Response.model}  default - Unexpected error
   */
  .get(UsersController.get);

export default UsersRoutes;
