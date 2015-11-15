/**
 *
 * Created by thrawn on 15/11/15.
 */


import { jsdom } from 'jsdom'

global.document = jsdom('<!doctype html><html><body></body></html>');
global.window = document.defaultView;
global.navigator = global.window.navigator;
