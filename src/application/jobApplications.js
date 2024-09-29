import ValidationError from "../domain/errors/validation-error.js";
import JobApplication from "../persistance/entities/jobApplications.js";
import { JobApplicationDTO } from "./dto/jopApplications.js";

export const getAllJobApplications = async (req, res, next) => {
  try {
    const jobApplications = await JobApplication.find()
      .populate("job", ["title", "description"])
      .exec();
    return res.status(200).json(jobApplications);
  } catch (error) {
    next(error);
  }
};

export const createJobApplication = async (req, res, next) => {
  try {
    const jobApplication = JobApplicationDTO.safeParse(req.body);
    if (!jobApplication.success) {
      throw new ValidationError(jobApplication.error);
    }

    await JobApplication.create({ ...jobApplication.data, userId: "123" });
    return res.status(201).send();
  } catch (error) {
    next(error);
  }
};
