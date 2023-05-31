import { Body, Get, JsonController, Res } from "routing-controllers";
import { Service } from "typedi";
import { BlogsService } from "../../services/blogs.service";
import { Response } from "express";
import { sendResponse } from "../../utils/api.util";
import { BlogsDto } from "../../validations/blogs.validation";

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

    @Get('/create')
    async createBlog(@Res() res: Response, @Body() dto: BlogsDto){
        await this.blogsService.createBlog(dto);

        return sendResponse(res, {message: 'successfully created blogs!'});
    }
}