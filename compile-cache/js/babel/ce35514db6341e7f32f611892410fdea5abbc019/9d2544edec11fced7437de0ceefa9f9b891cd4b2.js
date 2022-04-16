"use babel";
"use strict";

/*
 * Copyright (C) 2016-present Arctic Ice Studio <development@arcticicestudio.com>
 * Copyright (C) 2016-present Sven Greb <development@svengreb.de>
 *
 * Project:    Nord Atom Syntax
 * Repository: https://github.com/arcticicestudio/nord-atom-syntax
 * License:    MIT
 */

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = {
  handleDeprecatedCustomCommentContrastSetting: function handleDeprecatedCustomCommentContrastSetting(options) {
    var customCommentContrast = atom.config.get("nord-atom-syntax.accessibility.commentContrast");
    if (customCommentContrast != 0) {
      atom.notifications.addWarning("The \"Custom Comment Contrast\" theme setting is deprecated and will be removed in version 1.0.0!", {
        detail: "To adapt to the change reset the setting to the default value by deleting the user-defined value from the text field or setting the value to 0.",
        description: "The comment color brightness has been increased by 10% by default!\n        As of version 0.4.0, the setting has no effect anymore. Please see [arcticicestudio/nord-atom-syntax#60](https://github.com/arcticicestudio/nord-atom-syntax/issues/60) for more details.",
        dismissable: true,
        icon: "megaphone"
      });

      if (!options || !options.noReload) {
        (function () {
          var themePack = atom.packages.getLoadedPackage("nord-atom-syntax");

          if (themePack) {
            setImmediate(function () {
              return themePack.activate();
            });
          }
        })();
      }
      if (options && options.callback && typeof options.callback === "function") {
        options.callback();
      };
    }
  },

  activate: function activate() {
    var _this = this;

    atom.config.onDidChange("nord-atom-syntax.accessibility.commentContrast", function () {
      return _this.handleDeprecatedCustomCommentContrastSetting({ noReload: true });
    });
  }
};
module.exports = exports["default"];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3R1bmtlcnQvLmF0b20vcGFja2FnZXMvbm9yZC1hdG9tLXN5bnRheC9saWIvbWFpbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxXQUFXLENBQUM7QUFDWixZQUFZLENBQUM7Ozs7Ozs7Ozs7Ozs7O3FCQVdFO0FBQ2IsOENBQTRDLEVBQUEsc0RBQUMsT0FBTyxFQUFFO0FBQ3BELFFBQUkscUJBQXFCLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsZ0RBQWdELENBQUMsQ0FBQztBQUM5RixRQUFJLHFCQUFxQixJQUFJLENBQUMsRUFBRTtBQUM5QixVQUFJLENBQUMsYUFBYSxDQUFDLFVBQVUsc0dBQW9HO0FBQy9ILGNBQU0sRUFBRSxpSkFBaUo7QUFDekosbUJBQVcseVFBQytLO0FBQzFMLG1CQUFXLEVBQUUsSUFBSTtBQUNqQixZQUFJLEVBQUUsV0FBVztPQUNsQixDQUFDLENBQUM7O0FBRUgsVUFBSSxDQUFDLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUU7O0FBQ2pDLGNBQUksU0FBUyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsa0JBQWtCLENBQUMsQ0FBQzs7QUFFbkUsY0FBSSxTQUFTLEVBQUU7QUFDYix3QkFBWSxDQUFDO3FCQUFNLFNBQVMsQ0FBQyxRQUFRLEVBQUU7YUFBQSxDQUFDLENBQUM7V0FDMUM7O09BQ0Y7QUFDRCxVQUFJLE9BQU8sSUFBSSxPQUFPLENBQUMsUUFBUSxJQUFJLE9BQU8sT0FBTyxDQUFDLFFBQVEsS0FBSyxVQUFVLEVBQUU7QUFDekUsZUFBTyxDQUFDLFFBQVEsRUFBRSxDQUFDO09BQ3BCLENBQUM7S0FDSDtHQUNGOztBQUVELFVBQVEsRUFBQSxvQkFBRzs7O0FBQ1QsUUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsZ0RBQWdELEVBQUU7YUFBTSxNQUFLLDRDQUE0QyxDQUFDLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxDQUFDO0tBQUEsQ0FBQyxDQUFDO0dBQ3hKO0NBQ0YiLCJmaWxlIjoiL2hvbWUvdHVua2VydC8uYXRvbS9wYWNrYWdlcy9ub3JkLWF0b20tc3ludGF4L2xpYi9tYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgYmFiZWxcIjtcblwidXNlIHN0cmljdFwiO1xuXG4vKlxuICogQ29weXJpZ2h0IChDKSAyMDE2LXByZXNlbnQgQXJjdGljIEljZSBTdHVkaW8gPGRldmVsb3BtZW50QGFyY3RpY2ljZXN0dWRpby5jb20+XG4gKiBDb3B5cmlnaHQgKEMpIDIwMTYtcHJlc2VudCBTdmVuIEdyZWIgPGRldmVsb3BtZW50QHN2ZW5ncmViLmRlPlxuICpcbiAqIFByb2plY3Q6ICAgIE5vcmQgQXRvbSBTeW50YXhcbiAqIFJlcG9zaXRvcnk6IGh0dHBzOi8vZ2l0aHViLmNvbS9hcmN0aWNpY2VzdHVkaW8vbm9yZC1hdG9tLXN5bnRheFxuICogTGljZW5zZTogICAgTUlUXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQge1xuICBoYW5kbGVEZXByZWNhdGVkQ3VzdG9tQ29tbWVudENvbnRyYXN0U2V0dGluZyhvcHRpb25zKSB7XG4gICAgbGV0IGN1c3RvbUNvbW1lbnRDb250cmFzdCA9IGF0b20uY29uZmlnLmdldChcIm5vcmQtYXRvbS1zeW50YXguYWNjZXNzaWJpbGl0eS5jb21tZW50Q29udHJhc3RcIik7XG4gICAgaWYgKGN1c3RvbUNvbW1lbnRDb250cmFzdCAhPSAwKSB7XG4gICAgICBhdG9tLm5vdGlmaWNhdGlvbnMuYWRkV2FybmluZyhgVGhlIFwiQ3VzdG9tIENvbW1lbnQgQ29udHJhc3RcIiB0aGVtZSBzZXR0aW5nIGlzIGRlcHJlY2F0ZWQgYW5kIHdpbGwgYmUgcmVtb3ZlZCBpbiB2ZXJzaW9uIDEuMC4wIWAsIHtcbiAgICAgICAgZGV0YWlsOiBcIlRvIGFkYXB0IHRvIHRoZSBjaGFuZ2UgcmVzZXQgdGhlIHNldHRpbmcgdG8gdGhlIGRlZmF1bHQgdmFsdWUgYnkgZGVsZXRpbmcgdGhlIHVzZXItZGVmaW5lZCB2YWx1ZSBmcm9tIHRoZSB0ZXh0IGZpZWxkIG9yIHNldHRpbmcgdGhlIHZhbHVlIHRvIDAuXCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBgVGhlIGNvbW1lbnQgY29sb3IgYnJpZ2h0bmVzcyBoYXMgYmVlbiBpbmNyZWFzZWQgYnkgMTAlIGJ5IGRlZmF1bHQhXG4gICAgICAgIEFzIG9mIHZlcnNpb24gMC40LjAsIHRoZSBzZXR0aW5nIGhhcyBubyBlZmZlY3QgYW55bW9yZS4gUGxlYXNlIHNlZSBbYXJjdGljaWNlc3R1ZGlvL25vcmQtYXRvbS1zeW50YXgjNjBdKGh0dHBzOi8vZ2l0aHViLmNvbS9hcmN0aWNpY2VzdHVkaW8vbm9yZC1hdG9tLXN5bnRheC9pc3N1ZXMvNjApIGZvciBtb3JlIGRldGFpbHMuYCxcbiAgICAgICAgZGlzbWlzc2FibGU6IHRydWUsXG4gICAgICAgIGljb246IFwibWVnYXBob25lXCJcbiAgICAgIH0pO1xuXG4gICAgICBpZiAoIW9wdGlvbnMgfHwgIW9wdGlvbnMubm9SZWxvYWQpIHtcbiAgICAgICAgbGV0IHRoZW1lUGFjayA9IGF0b20ucGFja2FnZXMuZ2V0TG9hZGVkUGFja2FnZShcIm5vcmQtYXRvbS1zeW50YXhcIik7XG5cbiAgICAgICAgaWYgKHRoZW1lUGFjaykge1xuICAgICAgICAgIHNldEltbWVkaWF0ZSgoKSA9PiB0aGVtZVBhY2suYWN0aXZhdGUoKSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChvcHRpb25zICYmIG9wdGlvbnMuY2FsbGJhY2sgJiYgdHlwZW9mIG9wdGlvbnMuY2FsbGJhY2sgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICBvcHRpb25zLmNhbGxiYWNrKCk7XG4gICAgICB9O1xuICAgIH1cbiAgfSxcblxuICBhY3RpdmF0ZSgpIHtcbiAgICBhdG9tLmNvbmZpZy5vbkRpZENoYW5nZShcIm5vcmQtYXRvbS1zeW50YXguYWNjZXNzaWJpbGl0eS5jb21tZW50Q29udHJhc3RcIiwgKCkgPT4gdGhpcy5oYW5kbGVEZXByZWNhdGVkQ3VzdG9tQ29tbWVudENvbnRyYXN0U2V0dGluZyh7IG5vUmVsb2FkOiB0cnVlIH0pKTtcbiAgfVxufTtcbiJdfQ==