import { defineConfig } from "@content-collections/core";

import { blogs } from "./definitions/blog";
import { trainings } from "./definitions/trainings";

export default defineConfig({
    collections: [blogs, trainings],
});
