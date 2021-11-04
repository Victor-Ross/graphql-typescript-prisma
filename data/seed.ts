import { v4 as uuidv4 } from 'uuid';

export const users = [
    {
        id: uuidv4(),
        name: 'Octavio Flores',
        email: 'oflores@zcorp.com',
        password: 'abc123'
    },
    {
        id: uuidv4(),
        name: 'Farah Bennis',
        email: 'fbennis@zcorp.com',
        password: 'bbc123'
    },
    {
        id: uuidv4(),
        name: 'Peter Quan',
        email: 'pquan@zcorp.com',
        password: 'cbc123'
    },
]

export const projects = [
    {
        title: 'Site Upgrade - Login Form',
        status: 'active'
    },
    {
        title: 'Site Upgrade - User Dashboard',
        status: 'active'
    },
    {
        title: 'Server Migration',
        status: 'completed'
    },
]

export const assignments = [
    {
        project_id: 1,
        user_id: '3685fda3-d9c9-49ee-b79c-bcf6d9799eba'
    },
    {
        project_id: 2,
        user_id: '3685fda3-d9c9-49ee-b79c-bcf6d9799eba'
    },
    {
        project_id: 1,
        user_id: '6289df09-3ed0-41cc-ad73-8b4e80784a7a'
    },
]