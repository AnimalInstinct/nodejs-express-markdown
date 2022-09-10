"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
function requestListener(req, res) {
    console.log("Request::Method::", req.method, "URL:: ", req.url);
    let body = [];
    req.on('data', (chunk) => {
        body.push(chunk);
    });
    req.on('end', () => {
        const reqParsed = Buffer.concat(body).toString();
        console.log("Request::body::parsed:: ", reqParsed);
        const username = reqParsed.split('=')[1];
        console.log('Username::', username);
        res.setHeader('Content-Type', 'text/html');
        res.write(`${username ?
            '<h1>' + username + '</h1>' :
            '<h1>What is your name</h1>'}
        <form method="POST">
        <input name="username" type="text"/>
        <button type="submit">Send</button>
        </form>`);
        res.end();
    });
}
const server = http_1.default.createServer((req, res) => requestListener(req, res));
server.listen(3000);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2FwcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLGdEQUE0RDtBQUU1RCxTQUFTLGVBQWUsQ0FBQyxHQUFvQixFQUFFLEdBQW1CO0lBQzlELE9BQU8sQ0FBQyxHQUFHLENBQUMsbUJBQW1CLEVBQUUsR0FBRyxDQUFDLE1BQU0sRUFBRSxRQUFRLEVBQUUsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFBO0lBRS9ELElBQUksSUFBSSxHQUFVLEVBQUUsQ0FBQTtJQUVwQixHQUFHLENBQUMsRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDLEtBQUssRUFBRSxFQUFFO1FBQ3JCLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUE7SUFDcEIsQ0FBQyxDQUFDLENBQUE7SUFFRixHQUFHLENBQUMsRUFBRSxDQUFDLEtBQUssRUFBRSxHQUFHLEVBQUU7UUFDZixNQUFNLFNBQVMsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFBO1FBQ2hELE9BQU8sQ0FBQyxHQUFHLENBQUMsMEJBQTBCLEVBQUUsU0FBUyxDQUFDLENBQUE7UUFDbEQsTUFBTSxRQUFRLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQTtRQUN4QyxPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxRQUFRLENBQUMsQ0FBQTtRQUVuQyxHQUFHLENBQUMsU0FBUyxDQUFDLGNBQWMsRUFBRSxXQUFXLENBQUMsQ0FBQTtRQUMxQyxHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsUUFBUSxDQUFDLENBQUM7WUFDbkIsTUFBTSxHQUFHLFFBQVEsR0FBRyxPQUFPLENBQUMsQ0FBQztZQUM3Qiw0QkFBNEI7Ozs7Z0JBSXhCLENBQ1AsQ0FBQTtRQUNELEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQTtJQUNiLENBQUMsQ0FBQyxDQUFBO0FBQ04sQ0FBQztBQUVELE1BQU0sTUFBTSxHQUFHLGNBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUUsQ0FBQyxlQUFlLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUE7QUFFekUsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQSJ9