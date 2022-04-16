(function() {
  var CompositeDisposable, CountWord, CountWordView;

  CountWordView = require('./count-word-view');

  CompositeDisposable = require('atom').CompositeDisposable;

  module.exports = CountWord = {
    countWordView: null,
    modalPanel: null,
    subscriptions: null,
    activate: function(state) {
      this.countWordView = new CountWordView(state.countWordViewState);
      this.modalPanel = atom.workspace.addModalPanel({
        item: this.countWordView.getElement(),
        visible: false
      });
      this.subscriptions = new CompositeDisposable;
      return this.subscriptions.add(atom.commands.add('atom-workspace', {
        'count-word:toggle': (function(_this) {
          return function() {
            return _this.toggle();
          };
        })(this)
      }));
    },
    deactivate: function() {
      this.modalPanel.destroy();
      this.subscriptions.dispose();
      return this.countWordView.destroy();
    },
    serialize: function() {
      return {
        countWordViewState: this.countWordView.serialize()
      };
    },
    toggle: function() {
      var charsCount, editor, linesCount, selectedCharsCount, selectedLinesCount, selectedText, selectedWords, selectedWordsCount, text, words, wordsCount;
      if (this.modalPanel.isVisible()) {
        return this.modalPanel.hide();
      } else if (atom.workspace.getActiveTextEditor() !== void 0) {
        editor = atom.workspace.getActiveTextEditor();
        text = editor.getText();
        words = text.split(/\s+/);
        wordsCount = words.length;
        charsCount = words.join('').length;
        linesCount = text.split(/\r\n|\r|\n/).length;
        selectedText = editor.getSelectedText();
        selectedWords = selectedText.split(/\s+/);
        selectedWordsCount = selectedWords.length;
        selectedCharsCount = selectedWords.join('').length;
        selectedLinesCount = selectedText.split(/\r\n|\r|\n/).length;
        this.countWordView.setCount(wordsCount, charsCount, linesCount, selectedWordsCount, selectedCharsCount, selectedLinesCount);
        return this.modalPanel.show();
      }
    }
  };

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiL2hvbWUvdHVua2VydC8uYXRvbS9wYWNrYWdlcy9jb3VudC13b3JkL2xpYi9jb3VudC13b3JkLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUFBLE1BQUE7O0VBQUEsYUFBQSxHQUFnQixPQUFBLENBQVEsbUJBQVI7O0VBQ2Ysc0JBQXVCLE9BQUEsQ0FBUSxNQUFSOztFQUV4QixNQUFNLENBQUMsT0FBUCxHQUFpQixTQUFBLEdBQ2Y7SUFBQSxhQUFBLEVBQWUsSUFBZjtJQUNBLFVBQUEsRUFBWSxJQURaO0lBRUEsYUFBQSxFQUFlLElBRmY7SUFJQSxRQUFBLEVBQVUsU0FBQyxLQUFEO01BQ1IsSUFBQyxDQUFBLGFBQUQsR0FBaUIsSUFBSSxhQUFKLENBQWtCLEtBQUssQ0FBQyxrQkFBeEI7TUFDakIsSUFBQyxDQUFBLFVBQUQsR0FBYyxJQUFJLENBQUMsU0FBUyxDQUFDLGFBQWYsQ0FBNkI7UUFBQSxJQUFBLEVBQU0sSUFBQyxDQUFBLGFBQWEsQ0FBQyxVQUFmLENBQUEsQ0FBTjtRQUFtQyxPQUFBLEVBQVMsS0FBNUM7T0FBN0I7TUFHZCxJQUFDLENBQUEsYUFBRCxHQUFpQixJQUFJO2FBR3JCLElBQUMsQ0FBQSxhQUFhLENBQUMsR0FBZixDQUFtQixJQUFJLENBQUMsUUFBUSxDQUFDLEdBQWQsQ0FBa0IsZ0JBQWxCLEVBQW9DO1FBQUEsbUJBQUEsRUFBcUIsQ0FBQSxTQUFBLEtBQUE7aUJBQUEsU0FBQTttQkFBRyxLQUFDLENBQUEsTUFBRCxDQUFBO1VBQUg7UUFBQSxDQUFBLENBQUEsQ0FBQSxJQUFBLENBQXJCO09BQXBDLENBQW5CO0lBUlEsQ0FKVjtJQWNBLFVBQUEsRUFBWSxTQUFBO01BQ1YsSUFBQyxDQUFBLFVBQVUsQ0FBQyxPQUFaLENBQUE7TUFDQSxJQUFDLENBQUEsYUFBYSxDQUFDLE9BQWYsQ0FBQTthQUNBLElBQUMsQ0FBQSxhQUFhLENBQUMsT0FBZixDQUFBO0lBSFUsQ0FkWjtJQW1CQSxTQUFBLEVBQVcsU0FBQTthQUNUO1FBQUEsa0JBQUEsRUFBb0IsSUFBQyxDQUFBLGFBQWEsQ0FBQyxTQUFmLENBQUEsQ0FBcEI7O0lBRFMsQ0FuQlg7SUFzQkEsTUFBQSxFQUFRLFNBQUE7QUFFTixVQUFBO01BQUEsSUFBRyxJQUFDLENBQUEsVUFBVSxDQUFDLFNBQVosQ0FBQSxDQUFIO2VBQ0UsSUFBQyxDQUFBLFVBQVUsQ0FBQyxJQUFaLENBQUEsRUFERjtPQUFBLE1BRUssSUFBRyxJQUFJLENBQUMsU0FBUyxDQUFDLG1CQUFmLENBQUEsQ0FBQSxLQUF3QyxNQUEzQztRQUNILE1BQUEsR0FBUyxJQUFJLENBQUMsU0FBUyxDQUFDLG1CQUFmLENBQUE7UUFFVCxJQUFBLEdBQWEsTUFBTSxDQUFDLE9BQVAsQ0FBQTtRQUNiLEtBQUEsR0FBYSxJQUFJLENBQUMsS0FBTCxDQUFXLEtBQVg7UUFDYixVQUFBLEdBQWEsS0FBSyxDQUFDO1FBQ25CLFVBQUEsR0FBYSxLQUFLLENBQUMsSUFBTixDQUFXLEVBQVgsQ0FBYyxDQUFDO1FBQzVCLFVBQUEsR0FBYSxJQUFJLENBQUMsS0FBTCxDQUFXLFlBQVgsQ0FBd0IsQ0FBQztRQUV0QyxZQUFBLEdBQXFCLE1BQU0sQ0FBQyxlQUFQLENBQUE7UUFDckIsYUFBQSxHQUFxQixZQUFZLENBQUMsS0FBYixDQUFtQixLQUFuQjtRQUNyQixrQkFBQSxHQUFxQixhQUFhLENBQUM7UUFDbkMsa0JBQUEsR0FBcUIsYUFBYSxDQUFDLElBQWQsQ0FBbUIsRUFBbkIsQ0FBc0IsQ0FBQztRQUM1QyxrQkFBQSxHQUFxQixZQUFZLENBQUMsS0FBYixDQUFtQixZQUFuQixDQUFnQyxDQUFDO1FBRXRELElBQUMsQ0FBQSxhQUFhLENBQUMsUUFBZixDQUNFLFVBREYsRUFFRSxVQUZGLEVBR0UsVUFIRixFQUlFLGtCQUpGLEVBS0Usa0JBTEYsRUFNRSxrQkFORjtlQVNBLElBQUMsQ0FBQSxVQUFVLENBQUMsSUFBWixDQUFBLEVBeEJHOztJQUpDLENBdEJSOztBQUpGIiwic291cmNlc0NvbnRlbnQiOlsiQ291bnRXb3JkVmlldyA9IHJlcXVpcmUgJy4vY291bnQtd29yZC12aWV3J1xue0NvbXBvc2l0ZURpc3Bvc2FibGV9ID0gcmVxdWlyZSAnYXRvbSdcblxubW9kdWxlLmV4cG9ydHMgPSBDb3VudFdvcmQgPVxuICBjb3VudFdvcmRWaWV3OiBudWxsXG4gIG1vZGFsUGFuZWw6IG51bGxcbiAgc3Vic2NyaXB0aW9uczogbnVsbFxuXG4gIGFjdGl2YXRlOiAoc3RhdGUpIC0+XG4gICAgQGNvdW50V29yZFZpZXcgPSBuZXcgQ291bnRXb3JkVmlldyhzdGF0ZS5jb3VudFdvcmRWaWV3U3RhdGUpXG4gICAgQG1vZGFsUGFuZWwgPSBhdG9tLndvcmtzcGFjZS5hZGRNb2RhbFBhbmVsKGl0ZW06IEBjb3VudFdvcmRWaWV3LmdldEVsZW1lbnQoKSwgdmlzaWJsZTogZmFsc2UpXG5cbiAgICAjIEV2ZW50cyBzdWJzY3JpYmVkIHRvIGluIGF0b20ncyBzeXN0ZW0gY2FuIGJlIGVhc2lseSBjbGVhbmVkIHVwIHdpdGggYSBDb21wb3NpdGVEaXNwb3NhYmxlXG4gICAgQHN1YnNjcmlwdGlvbnMgPSBuZXcgQ29tcG9zaXRlRGlzcG9zYWJsZVxuXG4gICAgIyBSZWdpc3RlciBjb21tYW5kIHRoYXQgdG9nZ2xlcyB0aGlzIHZpZXdcbiAgICBAc3Vic2NyaXB0aW9ucy5hZGQgYXRvbS5jb21tYW5kcy5hZGQgJ2F0b20td29ya3NwYWNlJywgJ2NvdW50LXdvcmQ6dG9nZ2xlJzogPT4gQHRvZ2dsZSgpXG5cbiAgZGVhY3RpdmF0ZTogLT5cbiAgICBAbW9kYWxQYW5lbC5kZXN0cm95KClcbiAgICBAc3Vic2NyaXB0aW9ucy5kaXNwb3NlKClcbiAgICBAY291bnRXb3JkVmlldy5kZXN0cm95KClcblxuICBzZXJpYWxpemU6IC0+XG4gICAgY291bnRXb3JkVmlld1N0YXRlOiBAY291bnRXb3JkVmlldy5zZXJpYWxpemUoKVxuXG4gIHRvZ2dsZTogLT5cblxuICAgIGlmIEBtb2RhbFBhbmVsLmlzVmlzaWJsZSgpXG4gICAgICBAbW9kYWxQYW5lbC5oaWRlKClcbiAgICBlbHNlIGlmIGF0b20ud29ya3NwYWNlLmdldEFjdGl2ZVRleHRFZGl0b3IoKSAhPSB1bmRlZmluZWRcbiAgICAgIGVkaXRvciA9IGF0b20ud29ya3NwYWNlLmdldEFjdGl2ZVRleHRFZGl0b3IoKVxuXG4gICAgICB0ZXh0ICAgICAgID0gZWRpdG9yLmdldFRleHQoKVxuICAgICAgd29yZHMgICAgICA9IHRleHQuc3BsaXQoL1xccysvKVxuICAgICAgd29yZHNDb3VudCA9IHdvcmRzLmxlbmd0aFxuICAgICAgY2hhcnNDb3VudCA9IHdvcmRzLmpvaW4oJycpLmxlbmd0aFxuICAgICAgbGluZXNDb3VudCA9IHRleHQuc3BsaXQoL1xcclxcbnxcXHJ8XFxuLykubGVuZ3RoXG5cbiAgICAgIHNlbGVjdGVkVGV4dCAgICAgICA9IGVkaXRvci5nZXRTZWxlY3RlZFRleHQoKVxuICAgICAgc2VsZWN0ZWRXb3JkcyAgICAgID0gc2VsZWN0ZWRUZXh0LnNwbGl0KC9cXHMrLylcbiAgICAgIHNlbGVjdGVkV29yZHNDb3VudCA9IHNlbGVjdGVkV29yZHMubGVuZ3RoXG4gICAgICBzZWxlY3RlZENoYXJzQ291bnQgPSBzZWxlY3RlZFdvcmRzLmpvaW4oJycpLmxlbmd0aFxuICAgICAgc2VsZWN0ZWRMaW5lc0NvdW50ID0gc2VsZWN0ZWRUZXh0LnNwbGl0KC9cXHJcXG58XFxyfFxcbi8pLmxlbmd0aFxuXG4gICAgICBAY291bnRXb3JkVmlldy5zZXRDb3VudChcbiAgICAgICAgd29yZHNDb3VudCxcbiAgICAgICAgY2hhcnNDb3VudCxcbiAgICAgICAgbGluZXNDb3VudCxcbiAgICAgICAgc2VsZWN0ZWRXb3Jkc0NvdW50LFxuICAgICAgICBzZWxlY3RlZENoYXJzQ291bnQsXG4gICAgICAgIHNlbGVjdGVkTGluZXNDb3VudFxuICAgICAgICApXG5cbiAgICAgIEBtb2RhbFBhbmVsLnNob3coKVxuIl19
