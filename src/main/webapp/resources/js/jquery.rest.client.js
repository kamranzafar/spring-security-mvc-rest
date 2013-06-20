/*
 * JQuery REST Client
 * Author: Kamran
 * Email: xeus.man@gmail.com
 * 
 * Copyright (C) 2013 Kamran
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and 
 * associated documentation files (the "Software"),  * to deal in the Software without restriction, 
 * including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, 
 * and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, 
 * subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all copies or substantial 
 * portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT 
 * LIMITED TO THE WARRANTIES OF MERCHANTABILITY,  * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. 
 * IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, 
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE 
 * SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

RestClient = function (goptions) {
  this.goptions = goptions;
  
  var constants = {
    dataType: 'json',
    contentType: 'application/json',
    processData: true,
    timeout: 120000
  }
  
  var doAjax = function(method, gopts, opts){
    $.ajax({
        type: method,
        url: gopts.url + '/' + opts.path,
        data: opts.model ? JSON.stringify(opts.model) : '',
        dataType: opts.dataType ? opts.dataType : (gopts.dataType ? gopts.dataType : constants.dataType),
        contentType: opts.contentType ? opts.contentType : (gopts.contentType ? gopts.contentType : constants.contentType),
        processData: opts.processData ? opts.processData : (gopts.processData ? gopts.processData : constants.processData),
        timeout: opts.timeout ? opts.timeout : (gopts.timeout ? gopts.timeout : constants.timeout),
        success: opts.success ? opts.success : (gopts.success ? gopts.success : function(data){}),
        error: opts.error ? opts.error : (gopts.error ? gopts.error : function(req, status, ex) {}),
        complete: opts.complete ? opts.complete : (gopts.complete ? gopts.complete : function(){})
    });
  }

  this.post = function(opts) {
    doAjax('POST', goptions, opts);
  };
 
  this.put = function(opts) {
    doAjax('PUT', goptions, opts);
  };
 
  this.get = function(opts) {
    doAjax('GET', goptions, opts);
  };
 
  this.remove = function(opts) {
    doAjax('DELETE', goptions, opts);
  };
}