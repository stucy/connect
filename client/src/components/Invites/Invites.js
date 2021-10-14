import { useQuery } from 'react-query';
import axios from 'axios';

const fetchInvites = async () => {
    const res = await axios.post('/friends_data', {type: 'pending'})
    return res.data;
}

const Invites = () => {
    // const { data, status } = useQuery('invites', fetchInvites);
    return <div>Invites</div>
}

export default Invites;