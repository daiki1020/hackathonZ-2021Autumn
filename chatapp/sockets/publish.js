'use strict';

module.exports = function (socket, io) {
    // 投稿メッセージを送信する
    socket.on('publishEvent', function (data) {
        console.log(data);
        io.sockets.emit('publishEvent', data);
    });
};
