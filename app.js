const exec = require("child_process").exec;
exec(`git add .`, function (err, stdout, stderr) {
  if (err) {
    console.log(err, 2)
    console.error("生成 commit 失败！！！");
    process.exit(1);
    throw err;
  }
});
exec(`git commit -m 'test'`, function (err, stdout, stderr) {
  if (err) {
    console.log(err, 1)
    console.error("生成 commit 失败！！！");
    process.exit(1);
    throw err;
  }
});