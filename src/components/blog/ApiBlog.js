import axios from 'axios';


const baseUrl = 'http://localhost:3001';

export default class ApiBlog {


    async getBlogs() {
        try {
            return await axios.get(`${baseUrl}/api/blogs`);
        } catch (error) {
            throw new Error(`Error fetching blogs from ${baseUrl}: ${error.message}`);
        }
    }

    async getBlogbyId(id) {
        try {
            return await axios.get(`${baseUrl}/api/blogs/${id}`);
        } catch (error) {
            throw new Error(`Error fetching blog ${id} from ${baseUrl}: ${error.message}`);
        }
    }

    async updateBlog(id, data) {
        try {
            const response = await fetch(`${baseUrl}/blogs/${id}`, {
                method: 'PUT',
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            const updatedData = await response.json();
            return updatedData;
        } catch (error) {
            throw new Error(`Error updating blog ${id} from ${baseUrl}: ${error.message}`);
        }
    }

    async deleteBlog(id) {
        try {
            const response = await fetch(`${baseUrl}/blogs/${id}`, {
                method: 'DELETE'
            });
            return response.ok;
        } catch (error) {
            throw new Error(`Error deleting blog ${id} from ${baseUrl}: ${error.message}`);
        }
    }
}