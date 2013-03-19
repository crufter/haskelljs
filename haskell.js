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
        return a.reverse()
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
        for (var i = 1; i < a.length; i++) {
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
        for (var i = a.length - 2; i >= 0; i--) {
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
            s += a[i]
        }
        return s
    }
    
    e.product = function(a) {
        var s = 1
        for (var i in a) {
            s *= a[i]
        }
        return s
    }
    
    e.concat = function(a) {
        var r = []
        for (var i in a) {
            r  = r.concat(a[i])
        }
        return r
    }
    
    e.concatMap = function(f, a) {
        var r = []
        for (var i in a) {
            r = r.concat(f(a[i]))
        }
        return r
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
        if (n < 1) {
            return a
        }
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
            var c = a[i]
            if (pred(c) == true) {
                a1.push(c)
            } else {
                return a1
            }
        }
        return a1
    }
    
    e.dropWhile = function(pred, a) {
        var a1 = []
        for (var i in a) {
            var c = a[i]
            if (pred(c) == false) {
                return a.slice(i)
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
    
    e.elem = function(el, a) {
        for (var i in a) {
            if (el == a[i]) {
                return true
            }
        }
        return false
    }
    
    e.notElem = function(el, a) {
        return !e.elem(el, a)
    }
    
    // lookup
    
    e.zip = function(a1, a2) {
        var a3 = []
        var a2len = a2.length
        for (var i in a1) {
            if (i >= a2len) {
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
            if (i >= a2len || i >= a3len) {
                return a4
            }
            a4.push([a1[i], a2[i], a3[i]])
        }
        return a4
    }
    
    e.zipWith = function(f, a1, a2) {
        var a3 = []
        var a2len = a2.length
        for (var i in a1) {
            if (i >= a2len) {
                return a3
            }
            a3.push(f(a1[i], a2[i]))
        }
        return a3
    }
    
    e.zipWith3 = function(f, a1, a2, a3) {
        var a4 = []
        var a2len = a2.length, a3len = a3.length
        for (var i in a1) {
            if (i >= a2len || i >= a3len) {
                return a4
            }
            a4.push(f(a1[i], a2[i], a3[i]))
        }
        return a4
    }
    
    e.unzip = function(a1) {
        var a2 = []
        var a3 = []
        for (var i in a1) {
            a2.push(a1[i][0])
            a3.push(a1[i][1])
        }
        return [a2, a3]
    }
    
    e.unzip3 = function(a1) {
        var a2 = []
        var a3 = []
        var a4 = []
        for (var i in a1) {
            a2.push(a1[i][0])
            a3.push(a1[i][1])
            a4.push(a1[i][2])
        }
        return [a2, a3, a4]
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
        var add = function(a, b) {
            return a+b
        }
        assert(e.foldl(add, 0, [1, 2, 3, 4, 5]) == 15, "foldl")
        assert(e.foldl1(add, [1, 2, 3, 4, 5]) == 15, "foldl1")
        var sub = function(a, b) {
            return a/b
        }
        assert(e.foldr(sub, 1000, [10, 10, 10]) == 1, "foldr")
        assert(e.foldr1(sub, [10, 10, 10, 1000]) == 1, "foldr1")
        assert(e.and([true, true, true]) == true, "and1")
        assert(e.and([true, true, false]) == false, "and2")
        assert(e.or([false, false, true]) == true, "or1")
        assert(e.or([false, false, false]) == false, "or2")
        assert(e.any(isEven, [3, 3, 2]) == true, "any1")
        assert(e.any(isEven, [3, 3, 3]) == false, "any2")
        assert(e.all(isEven, [2, 2, 3]) == false, "all1")
        assert(e.all(isEven, [2, 2, 2]) == true, "all2")
        assert(e.sum([1,2,3,4,5]) == 15, "sum")
        assert(e.product([1,2,3,4,5]) == 120, "product")
        assert(arraysEqual(e.concat([[1,2], [3, 4]]), [1,2,3,4]), "concat")
        assert(arraysEqual(e.concat([[sqrt(1),sqrt(2)], [sqrt(3), sqrt(4)]]), [sqrt(1),sqrt(2),sqrt(3),sqrt(4)]), "concatMap")
        assert(e.maximum([5, 30, 30, 2]) == 30, "maximum")
        assert(e.minimum([6, 2, 3, 60, 1]) == 1, "minimum")
        assert(arraysEqual(e.replicate(3, 4), [4,4,4]), "replicate")
        // take
        assert(arraysEqual(e.take(3, [1,2,3,4,5]), [1,2,3]), "take1")
        assert(arraysEqual(e.take(3, [1,2]), [1,2]), "take2")
        assert(arraysEqual(e.take(3, []), []), "take3")
        assert(arraysEqual(e.take(-1, []), []), "take4")
        assert(arraysEqual(e.take(0, [1, 2]), []), "take5")
        // drop
        assert(arraysEqual(e.drop(3, [1,2,3,4,5]), [4,5]), "drop1")
        assert(arraysEqual(e.drop(3, [1,2]), []), "drop2")
        assert(arraysEqual(e.drop(3, []), []), "drop3")
        assert(arraysEqual(e.drop(-1, [1,2]), [1,2]), "drop4")
        assert(arraysEqual(e.drop(0, [1,2]), [1,2]), "drop5")
        // splitAt
        assert(arraysEqual(e.splitAt(3, [1,2,3,4,5]), [[1,2,3], [4,5]]), "splitAt1")
        assert(arraysEqual(e.splitAt(1, [1,2,3]), [[1], [2,3]]), "splitAt2")
        assert(arraysEqual(e.splitAt(3, [1,2,3]), [[1,2,3], []]), "splitAt3")
        assert(arraysEqual(e.splitAt(4, [1,2,3]), [[1,2,3], []]), "splitAt4")
        assert(arraysEqual(e.splitAt(0, [1,2,3]), [[], [1,2,3]]), "splitAt5")
        assert(arraysEqual(e.splitAt(-1, [1,2,3]), [[], [1,2,3]]), "splitAt6")
        // takeWhile
        var lt = function(a) {
            return function(b) {
                return b < a
            }
        }
        assert(arraysEqual(e.takeWhile(lt(3), [1,2,3,4,1,2,3,4]), [1,2]), "takeWhile1")
        assert(arraysEqual(e.takeWhile(lt(9), [1,2,3]), [1,2,3]), "takeWhile2")
        assert(arraysEqual(e.takeWhile(lt(0), [1,2,3]), []), "takeWhile3")
        // dropWhile
        assert(arraysEqual(e.dropWhile(lt(3), [1,2,3,4,5,1,2,3]), [3,4,5,1,2,3]), "dropWhile1")
        assert(arraysEqual(e.dropWhile(lt(9), [1,2,3]), []), "dropWhile2")
        assert(arraysEqual(e.dropWhile(lt(0), [1,2,3]), [1,2,3]), "dropWhile3")
        // span
        assert(arraysEqual(e.span(lt(3), [1,2,3,4,1,2,3,4]), [[1,2], [3,4,1,2,3,4]]), "span1")
        assert(arraysEqual(e.span(lt(9), [1,2,3]), [[1,2,3], []]), "span2")
        assert(arraysEqual(e.span(lt(0), [1,2,3]), [[], [1,2,3]]), "span3")
        // break
        var gt = function(a) {
            return function(b) {
                return b > a
            }
        }
        assert(arraysEqual(e.break(gt(3), [1,2,3,4,1,2,3,4]), [[1,2,3], [4,1,2,3,4]]), "break1")
        assert(arraysEqual(e.break(lt(9), [1,2,3]), [[], [1,2,3]]), "break2")
        assert(arraysEqual(e.break(gt(9), [1,2,3]), [[1,2,3], []]), "break3")
        assert(e.elem(5, [1,"b",5,3,5.1]) == true, "elem1")
        assert(e.elem(6, [1,"b",5,3,5.1]) == false, "elem2")
        assert(e.notElem(6, [1,"b",5,3,5.1]) == true, "notElem1")
        assert(e.notElem(5, [1,"b",5,3,5.1]) == false, "notElem2")
        assert(arraysEqual(e.zip([1,2,3,4], ["a", "b", "c"]), [[1, "a"], [2, "b"], [3, "c"]]), "zip")
        assert(arraysEqual(e.zip3([1,2,3,4], ["a", "b", "c"], [1.2, 2.2]), [[1, "a", 1.2], [2, "b", 2.2]]), "zip3")
        assert(arraysEqual(e.unzip([[1, "a"], [2, "b"]]), [[1,2], ["a", "b"]]), "unzip")
        assert(arraysEqual(e.unzip3([[1, "a", 1.2], [2, "b", 2.2]]), [[1,2], ["a", "b"], [1.2, 2.2]]), "unzip")
    }
    
    return e
}({})