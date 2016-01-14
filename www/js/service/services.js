
angular.module('starter.services', [])
  
.factory('$blob', function() {
  return {
    csvToURL: function(content) {
      var blob;
      blob = new Blob([content], {type: 'text/csv'});
      return (window.URL || window.webkitURL).createObjectURL(blob);
    },
    sanitizeCSVName: function(name) {
      if (/^[A-Za-z0-9]+\.csv$/.test(name)) {
        return name;
      }
      if (/^[A-Za-z0-9]+/.test(name)) {
        return name + ".csv";
      }
      throw new Error("Invalid title fo CSV file : " + name);
    },
    revoke: function(url) {
      return (window.URL || window.webkitURL).revokeObjectURL(url);
    }
  };
})
 
.factory('$click', function() {
  return {
    on: function(element) {
      var e = document.createEvent("MouseEvent");
      e.initMouseEvent("click", false, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
      element.dispatchEvent(e);
    }
  };
})
 
.directive('downloadCsv', function($parse, $click, $blob, $log, $timeout) {
  return {
    compile: function($element, attr) {
      var fn = $parse(attr.downloadCsv);
       
      return function(scope, element, attr) {
         
        element.on('click', function(event) {
          var a_href, content, title, url, _ref;
          _ref = fn(scope), content = _ref.content, title = _ref.title;
           
          if (!(content != null) && !(title != null)) {
            $log.warn("Invalid content or title in download-csv : ", content, title);
            return;
          }
           
          title = $blob.sanitizeCSVName(title);
          url = $blob.csvToURL(content);
           
          element.append("<a download=\"" + title + "\" href=\"" + url + "\"></a>");
          a_href = element.find('a')[0];
           
          $click.on(a_href);
          $timeout(function() {$blob.revoke(url);});
           
          element[0].removeChild(a_href);
        });
      };
    }
  };
})
.factory('Camera', ['$q', function($q) {
 
  return {
    getPicture: function(options) {
      var q = $q.defer();
      
      navigator.camera.getPicture(function(result) {
        // Do any magic you need
        q.resolve(result);
      }, function(err) {
        q.reject(err);
      }, options);
      
      return q.promise;
    }
  }
}])

// .factory('Excel',function($window){
//   alert("factory");
//         var uri='data:application/vnd.ms-excel;base64,',
//             template='<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40"><head><!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet><x:Name>{worksheet}</x:Name><x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook></xml><![endif]--></head><body><table>{table}</table></body></html>',
//             base64=function(s){return $window.btoa(unescape(encodeURIComponent(s)));},
//             format=function(s,c){return s.replace(/{(\w+)}/g,function(m,p){return c[p];})};
//         return {
//             tableToExcel:function(tableId,worksheetName){
//                 var table=$(tableId),
//                     ctx={worksheet:worksheetName,table:table.html()},
//                     href=uri+base64(format(template,ctx));
//                 return href;
//             }
//         };
//     })

/**
 * A simple example service that returns some data.
 */
.factory('Friends', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var friends = [
    { id: 0, name: 'Scruff McGruff' },
    { id: 1, name: 'G.I. Joe' },
    { id: 2, name: 'Miss Frizzle' },
    { id: 3, name: 'Ash Ketchum' }
  ];

  return {
    all: function() {
      return friends;
    },
    get: function(friendId) {
      // Simple index lookup
      return friends[friendId];
    }
  }
});