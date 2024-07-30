// src/types/propTypes.js
import PropTypes from 'prop-types';

export const courseShape = PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    type: PropTypes.string,
    teacher: PropTypes.string,
    previewImg: PropTypes.string ,
    type : PropTypes.string // public or private
});

export const assignmentShape = PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    type: PropTypes.string,
    percentage: PropTypes.number,
    passed: PropTypes.bool
});

export const studentShape = PropTypes.shape({
    id: PropTypes.number,
    profile : PropTypes.string ,
    firstname: PropTypes.string,
    lastname: PropTypes.string,
    email: PropTypes.string,
    gender: PropTypes.string,
});

export const messageShape = PropTypes.shape({
    id: PropTypes.number,
    content : PropTypes.string ,
    userid : PropTypes.number,
    time: PropTypes.string,
    date: PropTypes.string,
});
export const groupShape = PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    members: PropTypes.arrayOf(studentShape),
    chat: PropTypes.arrayOf(messageShape),
    adminId : PropTypes.number // the admin is the teacher who created the group
});

export const assetShape = PropTypes.shape({
    id: PropTypes.number,
    preview : PropTypes.string ,
    name: PropTypes.string,
    description: PropTypes.string,
    type : PropTypes.string ,
    format : PropTypes.string 
});


// extraction functions :
function extractDate(dateTimeString) {
    if (typeof dateTimeString !== 'string') {
        throw new Error('Input must be a string.');
    }
    // Split the string at 'T' and take the first part
    const [date] = dateTimeString.split('T');
    return date;
}
function extractTime(dateTimeString) {
    if (typeof dateTimeString !== 'string') {
        throw new Error('Input must be a string.');
    }
    // Split the string at 'T' and take the second part, then split at 'Z' if present
    const [, timeWithZone] = dateTimeString.split('T');
    const [time] = timeWithZone.split('Z');
    return time;
}
