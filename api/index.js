/*jslint node: true */
/*global module, require*/

'use strict';

module.exports = {
  kick:  (ctx, it) => {
    ctx.body = kickable(it)
  }
};

function kickable (it) {
  return it == "it" ? true : false;
}
