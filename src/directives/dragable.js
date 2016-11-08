
export default {
    bind(el, binding, vnode) {
        binding.dragable = false;
        binding.mouseX = 0;
        binding.mouseY = 0;

        binding.onMousedown = e => {
            binding.dragable = true;
            binding.mouseX = e.clientX;
            binding.mouseY = e.clientY;
            e.stopPropagation();
        };

        binding.onMouseup = e => {
            binding.dragable = false;
            e.stopPropagation();
        };

        binding.onMousemove = e => {
            if (binding.dragable) {
                var offsetX = e.clientX - binding.mouseX;
                var offsetY = e.clientY - binding.mouseY;
                binding.callback(offsetX, offsetY);
                binding.mouseX = e.clientX;
                binding.mouseY = e.clientY;
            }
        };

        if (binding.value && typeof binding.value === 'function') {
            binding.callback = binding.value;
        } else {
            binding.callback = () => {};
        }

        el.addEventListener('mousedown', binding.onMousedown);
        document.addEventListener('mouseup', binding.onMouseup);
        document.addEventListener('mousemove', binding.onMousemove);
    },
    update(el, binding, vnode) {
        // update callback if new value is function
        if (binding.value && typeof binding.value === 'function') {
            binding.callback = binding.value;
        }
    },
    unbind() {
        el.removeEventListener('mousedown', binding.onMousedown);
        document.removeEventListener('mouseup', binding.onMouseup);
        document.removeEventListener('mousemove', binding.onMousemove);
    }
};
