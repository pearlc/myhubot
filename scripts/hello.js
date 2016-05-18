module.exports = function(robot) {
  robot.hear(/hello/igm, function (msg) {
    msg.send('world!');
  })
}
