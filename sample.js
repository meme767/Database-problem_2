/*db.run('UPDATE Comments SET Content = "من أروع المقالات التي قرأتها، شكراً لك" WHERE CommentID = 3', function(err){
    if (err){
        return console.log(err.message);
    }
    console.log("Data Updated");
});*/


/*db.run('DELETE FROM Comments WHERE CommentID = 6', function(err){
    if (err){
        return console.log(err.message);
    }
    console.log("Data Deleted");
});*/
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./Blog.db');

db.all('SELECT Comments.Name, Comments.Content, ' +
    'Articles.ArticleName, Articles.Date FROM Comments INNER JOIN Articles ON Comments.ArticleID = Articles.ArticleID', function(err,table){
    if (err){
        return console.log(err.message);
    }
    console.log(table);
});


db.close((err) => {
    if (err) {
        return console.error(err.message);
    }
    console.log('Close the database connection.');
});