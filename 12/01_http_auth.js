const express = require('express');
const { Buffer } = require('buffer');

const app = express();

app.get('/api/login', (req, res, next)=>{
    console.log('GET /api/login', 'req.headers', req.headers);
    // Buffer objects are used to represent a fixed-length sequence of bytes.
    // When converting between Buffers and strings, a character encoding may be specified.
    // default: UTF-8

    // The character encodings currently supported by Node.js are the following:
    // utf8(or utf-8), utf16le(or utf-16le), latin1

    // Node.js also supports the following binary-to-text encodings.
    // For binary-to-text encodings, the naming convention is reversed:
    // Converting a Buffer into a string is typically referred to as encoding,
    // and converting a string into a Buffer as decoding.

    // Buffer -> String
    const authorization_type = req.headers.authorization.split(" ")[0].toLowerCase();
    console.log('GET /api/login', 'authorization_type', authorization_type);
    if (authorization_type === 'basic') {
        const encodedData = req.headers.authorization.split(" ")[1];
        // get user:password
        console.log('GET /api/login', 'Buffer->String', new Buffer.from(encodedData, 'base64').toString());
    } else {
        // bearer
        const encodedData = req.headers.authorization.split(" ")[1];
        const answer = 'eyJhbGciOiJIUzI1NiJ9.dXNlcg.WW3IjzzhPjsn7vU9rrFkJYC4tfZUrGS5vn355bOJ2I0';
        // get header.payload.signature
        console.log( encodedData === answer);
    }

    res.send('Hello, Node.js!');
});


const client_id = 'user'
const client_secret = 'user1234'

const encodedData = Buffer.from(`${client_id}:${client_secret}`).toString('base64');
const authorization_header_basic_string = `Authorization: Basic ${encodedData}`

console.log('headers' , authorization_header_basic_string);

app.listen(3000);