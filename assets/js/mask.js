;
(function() {

    let containerWidth = document.getElementById('cover__topo').getBoundingClientRect().width;
    let containerHeight = document.getElementById('cover__topo').getBoundingClientRect().height;
    let mask = document.getElementById('cover__mask');
    let dot = document.getElementById('cover__dot');
    let maskX = parseInt(mask.getAttribute('cx'));
    let maskY = parseInt(mask.getAttribute('cy'));
    let maskR, maskRadious;

    setRadious(containerWidth);

    let offset = {
        value: 0,
        x: 0,
        y: 0,
        z: 0
    };

    noise.seed(Math.random());

    function main(tFrame) {
        window.requestAnimationFrame(main);

        // calculate new offset
        offset.value = getNoise(maskX, maskY, offset.z);
        offset.x = Math.cos(offset.value) * 0.25;
        offset.y = Math.sin(offset.value) * 0.25;

        // console.log(offset.value);
        // console.log(offset.x);

        // update position with offset
        maskX = Math.min(Math.max(maskX + offset.x, maskRadious), containerWidth - maskRadious);
        maskY = Math.min(Math.max(maskY + offset.y, maskRadious), containerHeight - maskRadious);

        // console.log(maskX, maskY);

        // move the mask
        mask.setAttribute('cx', maskX);
        mask.setAttribute('cy', maskY);
        dot.style.left = (maskX - 8) + 'px';
        dot.style.top = (maskY - 8) + 'px';
        offset.z -= 0.025;
    }

    function setRadious(width) {
        if (width > 640) {
            maskR = 50;
        } else {
            maskR = 40;
        }

        mask.setAttribute('r', maskR);

        maskRadious = maskR + 10;
    }

    function getNoise(x, y, z) {
        let scale = 0.05;
        return noise.perlin3(x * 0.02, y * 0.05, z) * 2 * Math.PI;
    }

    var optimizedResize = (function() {

        var callbacks = [],
            running = false;

        // fired on resize event
        function resize() {

            if (!running) {
                running = true;

                if (window.requestAnimationFrame) {
                    window.requestAnimationFrame(runCallbacks);
                } else {
                    setTimeout(runCallbacks, 66);
                }
            }

        }

        // run the actual callbacks
        function runCallbacks() {

            callbacks.forEach(function(callback) {
                callback();
            });

            running = false;
        }

        // adds callback to loop
        function addCallback(callback) {

            if (callback) {
                callbacks.push(callback);
            }

        }

        return {
            // public method to add additional callback
            add: function(callback) {
                if (!callbacks.length) {
                    window.addEventListener('resize', resize);
                }
                addCallback(callback);
            }
        }
    }());

    // start process
    optimizedResize.add(function() {
        containerWidth = document.getElementById('cover__topo').getBoundingClientRect().width;
        setRadious(containerWidth);
    });

    main(); // Start the cycle
})();
