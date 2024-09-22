import express from "express";
import { getAllJobs, createJob, getJobById } from "../application/jobs.js";

const jobsRouter = express.Router();

// api/jobs/
jobsRouter.route("/").get(getAllJobs).post(createJob);

//api/jobs/:id
jobsRouter.route("/:id").get(getJobById);

export default jobsRouter;
