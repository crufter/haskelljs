var h = function(e) {

    e.map = function (f, a) {
        var a1 = []
        for (var i in a) {
            a1.push(f(a[i]))
        }
        return a1
    }
    
    e.filter = function (f, a) {
        var a1 = []
        for (var i in a) {
            var c = a[i]
            if (f(c)) {
                a1.push(c)
            }
        }
        return a1
    }
    
    e.head = function(a) {
        return a[0]
    }
    
    e.last = function(a) {
        return a[a.length - 1]
    }
    
    e.tail = function(a) {
        return a.slice(1)
    }
    
    e.init = function(a) {
        return a.slice(0, -1)
    }
    
    e.null = function(a) {
        return a.length == 0
    }
    
    e.reverse = function(a) {
        return a.reverse
    }
    
    e.length = function(a) {
        return a.length
    }
    
    e.foldl = function(f, s, a) {
        for (var i in a) {
            s = f(s, a[i])
        }
        return s
    }
    
    e.foldl1 = function(f, a) {
        var s = a[0]
        for (var i = 1; i < a.length; a++) {
            s = f(s, a[i])
        }
        return s
    }
    
    e.foldr = function(f, s, a) {
        for (var i = a.length - 1; i>=0; i--) {
            s = f(s, a[i])
        }
        return s
    }
    
    e.foldr1 = function(f, a) {
        var s = a[a.length - 1]
        for (var i = a.length - 2; i >= 0; a--) {
            s = f(s, a[i])
        }
        return s
    }
    
    e.and = function(a) {
        for (var i in a) {
            if (a[i] == false) {
                return false
            }
        }
        return true
    }
    
    e.or = function(a) {
        for (var i in a) {
            if (a[i] == true) {
                return true
            }
        }
        return false
    }
    
    e.any = function(f, a) {
        for (var i in a) {
            if (f(a[i]) == true) {
                return true
            }
        }
        return false
    }
    
    e.all = function(f, a) {
        for (var i in a) {
            if (f(a[i]) == false) {
                return false
            }
        }
        return true
    }
    
    e.sum = function(a) {
        var s = 0
        for (var i in a) {
            s += f(a[i])
        }
        return true
    }
    
    e.product = function(a) {
        var s = 0
        for (var i in a) {
            s *= f(a[i])
        }
        return true
    }
    
    e.concat = function(a) {
        var r = []
        for (var i in a) {
            r.concat(a[i])
        }
    }
    
    e.concatMap = function(f, a) {
        var r = []
        for (var i in a) {
            r.concat(f(a[i]))
        }
    }
    
    e.maximum = function(a) {
        return Math.max.apply(Math, a)
    }
    
    e.minimum = function(a) {
        return Math.min.apply(Math, a)
    }
    
    // scanl, scanl1, scanr, scanr1
    
    e.replicate = function(i, e) {
        var a = []
        for (var x = 0; x<i; x++) {
            a.push(e)
        }
        return a
    }
    
    e.take = function(n, a) {
        var alen = a.length
        if (n > alen) {
            return a
        }
        var a1 = []
        for (var i = 0; i < n && i < alen; i++) {
            a1.push(a[i])
        }
        return a1
    }
    
    e.drop = function(n, a) {
        var alen = a.length
        if (n > alen) {
            return []
        }
        var a1 = []
        for (var i = n; i < alen; i++) {
            a1.push(a[i])
        }
        return a1
    }
    
    e.splitAt = function(n, a) {
        return [e.take(n, a), e.drop(n, a)]
    }
    
    e.takeWhile = function(pred, a) {
        var a1 = []
        for (var i in a) {
            if (pred[a[i]] == true) {
                a1.push[a[i]]
            }
        }
        return a1
    }
    
    e.dropWhile = function(pred, a) {
        var a1 = []
        for (var i in a) {
            if (pred[a[i]] == false) {
                return a.slice(0)
            }
        }
        return []
    }
    
    e.span = function(pred, a) {
        var sat = e.takeWhile(pred, a)
        return [sat, a.slice(sat.length)]
    }
    
    e.break = function(pred, a) {
        var pred1 = function(c) {
            return !pred(c)
        }
        return e.span(pred1, a)
    }
    
    e.elem = function(e, a) {
        for (var i in a) {
            if (e == a[i]) {
                return true
            }
        }
        return false
    }
    
    e.notElem = function(e, a) {
        return !e.elem(e, a)
    }
    
    // lookup
    
    e.zip = function(a1, a2) {
        var a3 = []
        var a2len = a2.length
        for (var i in a1) {
            if (i <= a2len) {
                return a3
            }
            a3.push([a1[i], a2[i]])
        }
        return a3
    }
    
    e.zip3 = function(a1, a2, a3) {
        var a4 = []
        var a2len = a2.length, a3len = a3.length
        for (var i in a1) {
            if (i <= a2len || i <= a3len) {
                return a4
            }
            a4.push([a1[i], a2[i], a3[i]])
        }
        return a4
    }
    
    e.zipWith = function(f, a1, a2) {
        return false
    }
    
    e.zipWith3 = function(f, a1, a2, a3) {
        return false
    }
    
    e.unzip = function(f, a1, a2) {
        return false
    }
    
    e.unzip3 = function(f, a1, a2, a3) {
        return false
    }
    
    e.lines = function(s) {
        return s.split("\n")
    }
    
    e.words = function(s) {
        return s.split(" ")
    }
    
    e.unwords = function(a) { 
        return a.join(" ")
    }
    
    e.unlines = function(a) {
        return a.join("\n")
    }
    
    //
    
    e.tests = function() {
        var assert = function (val, tname) {
            if(!val) {
                console.log(tname + " test failed.")
                return
            }
            return
        }
        var arraysEqual = function (a1, a2) {
            return JSON.stringify(a1)==JSON.stringify(a2)
        }
        var sqrt = Math.sqrt
        assert(arraysEqual(e.map(sqrt, [1, 2, 3]), [sqrt(1), sqrt(2), sqrt(3)]), "map")
        var isEven = function(a) {
            return a%2 == 0
        }
        assert(arraysEqual([2,4], e.filter(isEven, [1,2,3,4,5])), "filter")
        assert(e.head([2,3,4]) == 2, "head")
        assert(e.head([3]) == 3, "head")
        assert(e.last([2,3,4]) == 4, "last")
        assert(e.last([3]) == 3, "last")
        assert(arraysEqual(e.init([2,3,4]), [2,3]), "init")
        assert(arraysEqual(e.tail([1,2,3]), [2,3]), "tail")
        assert(e.null([1]) == false, "null")
        assert(e.null([]) == true, "null")
        assert(arraysEqual(e.reverse([3,4,5,6]), [6,5,4,3]), "reverse")
        assert(e.length([0,0,0]) == 3, "length")
    }
    
    return e
}({})