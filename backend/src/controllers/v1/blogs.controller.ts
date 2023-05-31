import { Body, Get, JsonController, Param, Patch, Post, Res } from "routing-controllers";
import { Service } from "typedi";
import { BlogsService } from "../../services/blogs.service";
import { Response } from "express";
import { sendResponse } from "../../utils/api.util";
import { BlogsDto, EditBlogsDto } from "../../validations/blogs.validation";

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

    @Get('/:blogsId')
    async getBlogs(@Res() res: Response, @Param('blogsId') blogsId: number){
        const blog = await this.blogsService.getBlog(blogsId);

        return sendResponse(res, {
            data: blog,
            message: 'successfully found one blog!'
        });
    }

    @Post('/create')
    async createBlog(@Res() res: Response, @Body() dto: BlogsDto){
        await this.blogsService.createBlog(dto);

        return sendResponse(res, {message: 'successfully created blogs!'});
    }

    @Patch('/:blogsId')
    async updateBlog(@Res() res: Response, @Body() dto: EditBlogsDto){
        await this.blogsService.updateBlog(dto);

        return sendResponse(res, {message: 'blog successfully updated!'});
    }

    
}