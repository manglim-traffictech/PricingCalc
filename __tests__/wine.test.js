const { exec } = require('child_process');

test('wine command is unavailable or fails to execute', done => {
  exec('wine --version', (error, stdout, stderr) => {
    console.log('wine stdout:', stdout.trim());
    console.log('wine stderr:', stderr.trim());
    expect(error).not.toBeNull();
    expect(stderr).toMatch(/(not found|Exec format error)/);
    done();
  });
});
