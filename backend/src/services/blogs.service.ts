import { Service } from "typedi";
import { Blogs } from "../database/entities/blogs.entity";
import { BlogsDto, EditBlogsDto } from "../validations/blogs.validation";
import { UserService } from "./user.service";
import { Errors } from "../utils/api.util";
import { title } from "process";

@Service()
export class BlogsService{
    constructor(private readonly userService: UserService){}
    async getAll(){
        const blogs = await Blogs.find();

        return blogs;
    }

    async getBlog(blogsId: number){
        const blog = await Blogs.findOneBy({blogsId});

        if(!blog){
            throw Errors.BLOG_NOT_FOUND;
        }

        return blog;
    }

    async createBlog(dto: BlogsDto){
        const blog = Blogs.create({
            ...dto
        });

        await Blogs.save(blog);
    }

    async updateBlog(blogsId: number, dto: EditBlogsDto){
        const blog = await this.getBlog(blogsId);

        blog.title = dto.title;
        blog.description = dto.description;
        blog.content = dto.content;

        await blog.save();
    }

    async deleteBlog(blogsId: number){
        const blog = await this.getBlog(blogsId);

        await Blogs.remove(blog);
    }

}