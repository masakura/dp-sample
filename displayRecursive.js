'use strict';

var fs = require('fs');
var path = require('path');

/**
 * 指定されたパスのファイル・ディレクトリの一覧を再帰的に表示します。
 * @param nodePath {String} 探索する最初のファイルまたはディレクトリ。
 */
function displayRecursive(nodePath) {
  console.log(nodePath);

  // ディレクトリかファイルかを調べる
  var stat = fs.statSync(nodePath);

  if (stat.isDirectory()) {
    // ディレクトリの場合は配下のディレクトリ・ファイル一覧を取得して
    // 再帰呼び出しをして子を表示する
    var children = fs.readdirSync(nodePath);
    children.forEach(function (child) {
      displayRecursive(path.join(nodePath, child));
    });
  }
}

module.exports = displayRecursive;
