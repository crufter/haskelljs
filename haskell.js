var h = function(exports) {

    exports.map = function (f, a) {
        var a1 = []
        for (var i in a) {
            a1.push(f(a[i]))
        }
        return a1
    }
    
    exports.filter = function (f, a) {
        var a1 = []
        for (var i in a) {
            var c = a[i]
            if (f(c)) {
                a1.push(c)
            }
        }
        return a1
    }
    
    exports.head = function(a) {
        return a[0]
    }
    
    exports.last = function(a) {
        return a[a.length - 1]
    }
    
    exports.tail = function(a) {
        return a.slice(1)
    }
    
    exports.init = function(a) {
        return a.slice(0, -1)
    }
    
    exports.null = function(a) {
        return a.length == 0
    }
    
    exports.reverse = function(a) {
        return a.reverse
    }
    
    exports.length = function(a) {
        return a.length
    }
    
    exports.foldl = function(f, s, a) {
        for (var i in a) {
            s = f(s, a[i])
        }
        return s
    }
    
    exports.foldl1 = function(f, a) {
        var s = a[0]
        for (var i = 1; i < a.length; a++) {
            s = f(s, a[i])
        }
        return s
    }
    
    exports.foldr = function(f, s, a) {
        for (var i = a.length - 1; i>=0; i--) {
            s = f(s, a[i])
        }
        return s
    }
    
    exports.foldr1 = function(f, a) {
        var s = a[a.length - 1]
        for (var i = a.length - 2; i >= 0; a--) {
            s = f(s, a[i])
        }
        return s
    }
    
    exports.and = function(a) {
        for (var i in a) {
            if (a[i] == false) {
                return false
            }
        }
        return true
    }
    
    exports.or = function(a) {
        for (var i in a) {
            if (a[i] == true) {
                return true
            }
        }
        return false
    }
    
    exports.any = function(f, a) {
        for (var i in a) {
            if (f(a[i]) == true) {
                return true
            }
        }
        return false
    }
    
    exports.all = function(f, a) {
        for (var i in a) {
            if (f(a[i]) == false) {
                return false
            }
        }
        return true
    }
    
    exports.sum = function(a) {
        var s = 0
        for (var i in a) {
            s += f(a[i])
        }
        return true
    }
    
    exports.product = function(a) {
        var s = 0
        for (var i in a) {
            s *= f(a[i])
        }
        return true
    }
    
    exports.concat = function(a) {
        var r = []
        for (var i in a) {
            r.concat(a[i])
        }
    }
    
    exports.concatMap = function(f, a) {
        var r = []
        for (var i in a) {
            r.concat(f(a[i]))
        }
    }
    
    exports.maximum = function(a) {
        return Math.max.apply(Math, a)
    }
    
    exports.minimum = function(a) {
        return Math.min.apply(Math, a)
    }
    
    // scanl, scanl1, scanr, scanr1
    
    exports.replicate = function(i, e) {
        var a = []
        for (var x = 0; x<i; x++) {
            a.push(e)
        }
        return a
    }
    
    
    
    return exports
}({})