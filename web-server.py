#!/usr/bin/env python
from collections import deque
import datetime
import math
import random
import time
import urllib

import tornado.gen
import tornado.escape
import tornado.ioloop
import tornado.web
import tornado.websocket
import tornado.platform.twisted
from tornado.httpclient import AsyncHTTPClient, HTTPRequest

#install this before importing anything else, or VERY BAD THINGS happen
tornado.platform.twisted.install()


class MainPageHandler(tornado.web.RequestHandler):
    @tornado.gen.coroutine
    def get(self):
        self.render("./index.html")

def make_app():
    return tornado.web.Application([
        (r"/", MainPageHandler),
        (r'/(.*)', tornado.web.StaticFileHandler, {'path': "./"})
    ], debug=True)


if __name__ == "__main__":
    print "Running at http://localhost:8888"
    app = make_app()
    app.listen(8888)
    tornado.ioloop.IOLoop.current().start()
