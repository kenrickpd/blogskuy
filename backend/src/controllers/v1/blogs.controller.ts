import { Body, Get, JsonController, Res } from "routing-controllers";
import { Service } from "typedi";
import { BlogsService } from "../../services/blogs.service";
import { Response } from "express";
import { sendResponse } from "../../utils/api.util";

@Service()
@JsonController('/blogs')
export class BlogsController{
    constructor(private readonly blogsService: BlogsService){}

    @Get('/')
    async viewAllBlogs(@Res() res: Response){
        const blogs = await this.blogsService.getAll();

        return sendResponse(res, {
            data: blogs,
            message: 'Sucessfully found all Blogs!'
        });
    }
}