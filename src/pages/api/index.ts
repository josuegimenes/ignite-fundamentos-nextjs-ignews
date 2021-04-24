import { NextApiRequest, NextApiResponse } from 'next';

export default (request: NextApiRequest, response: NextApiResponse) => {
    const users = [
        { id: 1, name: 'Josué' },
        { id: 2, name: 'Diego' },
        { id: 3, name: 'Dani' },
        { id: 4, name: 'Rafa' },
    ]

    return response.json(users);
}