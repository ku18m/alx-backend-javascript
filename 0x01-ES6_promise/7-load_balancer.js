export default (chinaDownload, USDownload) => Promise
  .race([chinaDownload, USDownload])
  .then((res) => res);
