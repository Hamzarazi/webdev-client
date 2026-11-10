"use client";
import { create } from "zustand";
import coursesJson from "../database/courses.json";
export type Course = (typeof coursesJson)[number];
export const emptyCourse: Course = {
  _id: "0",
  name: "New Course",
  number: "New Number",
  startDate: "2026-09-10",
  endDate: "2026-12-15",
  department: "D123",
  credits: 4,
  term: "Fall 2026",
  description: "New Description",
  image: "/images/reactjs.jpg",
};
type CoursesStore = {
  courses: Course[];
  addCourse: (course: Course) => Course;
  deleteCourse: (courseId: string) => void;
  updateCourse: (course: Course) => void;
};
export const useCoursesStore = create<CoursesStore>((set) => ({
  courses: coursesJson,
  addCourse: (course) => {
    const newCourse = { ...emptyCourse, ...course, _id: crypto.randomUUID() };
    set((state) => ({ courses: [...state.courses, newCourse] }));
    return newCourse;
  },
  deleteCourse: (courseId) =>
    set((state) => ({
      courses: state.courses.filter((course) => course._id !== courseId),
    })),
  updateCourse: (course) =>
    set((state) => ({
      courses: state.courses.map((c) => (c._id === course._id ? course : c)),
    })),
}));
