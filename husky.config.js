module.exports = {
  hooks: {
    'commit-msg': 'commitlint -e $HUSKY_GIT_PARAMS',
    'pre-push': 'npm test',
  },
};
