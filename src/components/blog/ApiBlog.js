import axios from 'axios';


const baseUrl = 'http://localhost:3001';

export default class ApiBlog {

    async addBlog(blog) {
        try {
            const {data} = await axios.post(`${baseUrl}/api/blogs`, blog);
            return data;
        } catch (error) {
            throw new Error(`Error fetching blogs from ${baseUrl}: ${error.message}`);
        }
    }
    async getBlogs() {
        try {
            const {data} = await axios.get(`${baseUrl}/api/blogs`);

            return data;
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

    async addCover(file) {
        try {
            const response = axios.post(`${baseUrl}/api/files`, file, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })

            return response;
        } catch (error) {
            throw new Error(`Error deleting blog ${file} from ${baseUrl}: ${error.message}`);
        }
    }
    async removeCover(filepath) {
        const path = { path: filepath }
        try {
            const response = axios.post(`${baseUrl}/api/files/remove`, path)

            return response;
        } catch (error) {
            throw new Error(`Error deleting blog ${filepath} from ${baseUrl}: ${error.message}`);
        }
    }
}