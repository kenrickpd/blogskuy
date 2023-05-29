import { Service } from "typedi";
import { Blogs } from "../database/entities/blogs.entity";

@Service()
export class BlogsService{
    async getAll(){
        const blogs = await Blogs.find();

        return blogs;
    }

}