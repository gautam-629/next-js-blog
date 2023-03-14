import matter from "gray-matter";
import fs from "fs";
import path from "path";
import { PostApiResponse } from "../utils/types";

export const readPostsInfo = (): PostApiResponse => {
  const dirPathToRead = path.join(process.cwd(), "posts");
  const dirs = fs.readdirSync(dirPathToRead);
  const data = dirs.map((filename) => {
    const filePathToRead = path.join(process.cwd(), "posts/" + filename);
    const fileContent = fs.readFileSync(filePathToRead, { encoding: "utf-8" });
    return matter(fileContent).data;
  });

  return data as PostApiResponse;
};
