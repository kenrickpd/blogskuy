import { Service } from "typedi";
import { Blogs } from "../database/entities/blogs.entity";
import { BlogsDto } from "../validations/blogs.validation";
import { UserService } from "./user.service";
import { Errors } from "../utils/api.util";

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

    async setUser(userId: number, blogsId: number){
        const blog = await this.getBlog(blogsId);

        blog.userId = userId;

        await blog.save();
    }

    async createBlog(dto: BlogsDto){
        const blog = Blogs.create({
            ...dto
        });

        await Blogs.save(blog);
        await this.setUser(dto.userId, blog.blogsId);
    }

}