(function() {
  var CountWordView;

  module.exports = CountWordView = (function() {
    function CountWordView(serializedState) {
      var allTextResultElm, allTextTitle, selectedTextElm, selectedTextTitle;
      this.element = document.createElement('div');
      this.element.classList.add('count-word');
      allTextTitle = document.createElement('p');
      allTextTitle.textContent = "ALL TEXT";
      allTextTitle.classList.add('count-title');
      this.element.appendChild(allTextTitle);
      allTextResultElm = document.createElement('p');
      allTextResultElm.classList.add('count-message');
      this.element.appendChild(allTextResultElm);
      selectedTextTitle = document.createElement('p');
      selectedTextTitle.textContent = "SELECTED TEXT";
      selectedTextTitle.classList.add('count-title');
      this.element.appendChild(selectedTextTitle);
      selectedTextElm = document.createElement('p');
      selectedTextElm.classList.add('count-message');
      this.element.appendChild(selectedTextElm);
    }

    CountWordView.prototype.serialize = function() {};

    CountWordView.prototype.destroy = function() {
      return this.element.remove();
    };

    CountWordView.prototype.getElement = function() {
      return this.element;
    };

    CountWordView.prototype.setCount = function(wordsCount, charsCount, linesCount, selectedWordsCount, selectedCharsCount, selectedLinesCount) {
      var allTextResult, selectedTextResult;
      allTextResult = "Characters : " + charsCount + "　Words : " + wordsCount + "　Lines : " + linesCount;
      this.element.children[1].textContent = allTextResult;
      if (selectedCharsCount > 0) {
        this.element.children[2].classList.remove('count-hidden');
        this.element.children[3].classList.remove('count-hidden');
        selectedTextResult = "Characters : " + selectedCharsCount + "　Words : " + selectedWordsCount + "　Lines : " + selectedLinesCount;
        return this.element.children[3].textContent = selectedTextResult;
      } else {
        this.element.children[2].classList.add('count-hidden');
        return this.element.children[3].classList.add('count-hidden');
      }
    };

    return CountWordView;

  })();

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiL2hvbWUvdHVua2VydC8uYXRvbS9wYWNrYWdlcy9jb3VudC13b3JkL2xpYi9jb3VudC13b3JkLXZpZXcuY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUEsTUFBQTs7RUFBQSxNQUFNLENBQUMsT0FBUCxHQUNNO0lBQ1MsdUJBQUMsZUFBRDtBQUVYLFVBQUE7TUFBQSxJQUFDLENBQUEsT0FBRCxHQUFXLFFBQVEsQ0FBQyxhQUFULENBQXVCLEtBQXZCO01BQ1gsSUFBQyxDQUFBLE9BQU8sQ0FBQyxTQUFTLENBQUMsR0FBbkIsQ0FBdUIsWUFBdkI7TUFFQSxZQUFBLEdBQWUsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsR0FBdkI7TUFDZixZQUFZLENBQUMsV0FBYixHQUEyQjtNQUMzQixZQUFZLENBQUMsU0FBUyxDQUFDLEdBQXZCLENBQTJCLGFBQTNCO01BQ0EsSUFBQyxDQUFBLE9BQU8sQ0FBQyxXQUFULENBQXFCLFlBQXJCO01BRUEsZ0JBQUEsR0FBbUIsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsR0FBdkI7TUFDbkIsZ0JBQWdCLENBQUMsU0FBUyxDQUFDLEdBQTNCLENBQStCLGVBQS9CO01BQ0EsSUFBQyxDQUFBLE9BQU8sQ0FBQyxXQUFULENBQXFCLGdCQUFyQjtNQUVBLGlCQUFBLEdBQW9CLFFBQVEsQ0FBQyxhQUFULENBQXVCLEdBQXZCO01BQ3BCLGlCQUFpQixDQUFDLFdBQWxCLEdBQWdDO01BQ2hDLGlCQUFpQixDQUFDLFNBQVMsQ0FBQyxHQUE1QixDQUFnQyxhQUFoQztNQUNBLElBQUMsQ0FBQSxPQUFPLENBQUMsV0FBVCxDQUFxQixpQkFBckI7TUFFQSxlQUFBLEdBQWtCLFFBQVEsQ0FBQyxhQUFULENBQXVCLEdBQXZCO01BQ2xCLGVBQWUsQ0FBQyxTQUFTLENBQUMsR0FBMUIsQ0FBOEIsZUFBOUI7TUFDQSxJQUFDLENBQUEsT0FBTyxDQUFDLFdBQVQsQ0FBcUIsZUFBckI7SUFyQlc7OzRCQXdCYixTQUFBLEdBQVcsU0FBQSxHQUFBOzs0QkFHWCxPQUFBLEdBQVMsU0FBQTthQUNQLElBQUMsQ0FBQSxPQUFPLENBQUMsTUFBVCxDQUFBO0lBRE87OzRCQUdULFVBQUEsR0FBWSxTQUFBO2FBQ1YsSUFBQyxDQUFBO0lBRFM7OzRCQUdaLFFBQUEsR0FBVSxTQUFDLFVBQUQsRUFBYSxVQUFiLEVBQXlCLFVBQXpCLEVBQ0Esa0JBREEsRUFDb0Isa0JBRHBCLEVBQ3dDLGtCQUR4QztBQUdSLFVBQUE7TUFBQSxhQUFBLEdBQ0UsZUFBQSxHQUFnQixVQUFoQixHQUEyQixXQUEzQixHQUFzQyxVQUF0QyxHQUFpRCxXQUFqRCxHQUE0RDtNQUM5RCxJQUFDLENBQUEsT0FBTyxDQUFDLFFBQVMsQ0FBQSxDQUFBLENBQUUsQ0FBQyxXQUFyQixHQUFtQztNQUVuQyxJQUFHLGtCQUFBLEdBQXFCLENBQXhCO1FBQ0UsSUFBQyxDQUFBLE9BQU8sQ0FBQyxRQUFTLENBQUEsQ0FBQSxDQUFFLENBQUMsU0FBUyxDQUFDLE1BQS9CLENBQXNDLGNBQXRDO1FBQ0EsSUFBQyxDQUFBLE9BQU8sQ0FBQyxRQUFTLENBQUEsQ0FBQSxDQUFFLENBQUMsU0FBUyxDQUFDLE1BQS9CLENBQXNDLGNBQXRDO1FBQ0Esa0JBQUEsR0FDRSxlQUFBLEdBQWdCLGtCQUFoQixHQUFtQyxXQUFuQyxHQUE4QyxrQkFBOUMsR0FBaUUsV0FBakUsR0FBNEU7ZUFDOUUsSUFBQyxDQUFBLE9BQU8sQ0FBQyxRQUFTLENBQUEsQ0FBQSxDQUFFLENBQUMsV0FBckIsR0FBbUMsbUJBTHJDO09BQUEsTUFBQTtRQU9FLElBQUMsQ0FBQSxPQUFPLENBQUMsUUFBUyxDQUFBLENBQUEsQ0FBRSxDQUFDLFNBQVMsQ0FBQyxHQUEvQixDQUFtQyxjQUFuQztlQUNBLElBQUMsQ0FBQSxPQUFPLENBQUMsUUFBUyxDQUFBLENBQUEsQ0FBRSxDQUFDLFNBQVMsQ0FBQyxHQUEvQixDQUFtQyxjQUFuQyxFQVJGOztJQVBROzs7OztBQW5DWiIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID1cbmNsYXNzIENvdW50V29yZFZpZXdcbiAgY29uc3RydWN0b3I6IChzZXJpYWxpemVkU3RhdGUpIC0+XG4gICAgIyBDcmVhdGUgcm9vdCBlbGVtZW50XG4gICAgQGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIEBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2NvdW50LXdvcmQnKVxuXG4gICAgYWxsVGV4dFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgYWxsVGV4dFRpdGxlLnRleHRDb250ZW50ID0gXCJBTEwgVEVYVFwiXG4gICAgYWxsVGV4dFRpdGxlLmNsYXNzTGlzdC5hZGQoJ2NvdW50LXRpdGxlJylcbiAgICBAZWxlbWVudC5hcHBlbmRDaGlsZChhbGxUZXh0VGl0bGUpXG5cbiAgICBhbGxUZXh0UmVzdWx0RWxtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgYWxsVGV4dFJlc3VsdEVsbS5jbGFzc0xpc3QuYWRkKCdjb3VudC1tZXNzYWdlJylcbiAgICBAZWxlbWVudC5hcHBlbmRDaGlsZChhbGxUZXh0UmVzdWx0RWxtKVxuXG4gICAgc2VsZWN0ZWRUZXh0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICBzZWxlY3RlZFRleHRUaXRsZS50ZXh0Q29udGVudCA9IFwiU0VMRUNURUQgVEVYVFwiXG4gICAgc2VsZWN0ZWRUZXh0VGl0bGUuY2xhc3NMaXN0LmFkZCgnY291bnQtdGl0bGUnKVxuICAgIEBlbGVtZW50LmFwcGVuZENoaWxkKHNlbGVjdGVkVGV4dFRpdGxlKVxuXG4gICAgc2VsZWN0ZWRUZXh0RWxtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgc2VsZWN0ZWRUZXh0RWxtLmNsYXNzTGlzdC5hZGQoJ2NvdW50LW1lc3NhZ2UnKVxuICAgIEBlbGVtZW50LmFwcGVuZENoaWxkKHNlbGVjdGVkVGV4dEVsbSlcblxuICAjIFJldHVybnMgYW4gb2JqZWN0IHRoYXQgY2FuIGJlIHJldHJpZXZlZCB3aGVuIHBhY2thZ2UgaXMgYWN0aXZhdGVkXG4gIHNlcmlhbGl6ZTogLT5cblxuICAjIFRlYXIgZG93biBhbnkgc3RhdGUgYW5kIGRldGFjaFxuICBkZXN0cm95OiAtPlxuICAgIEBlbGVtZW50LnJlbW92ZSgpXG5cbiAgZ2V0RWxlbWVudDogLT5cbiAgICBAZWxlbWVudFxuXG4gIHNldENvdW50OiAod29yZHNDb3VudCwgY2hhcnNDb3VudCwgbGluZXNDb3VudCxcbiAgICAgICAgICAgIHNlbGVjdGVkV29yZHNDb3VudCwgc2VsZWN0ZWRDaGFyc0NvdW50LCBzZWxlY3RlZExpbmVzQ291bnQpIC0+XG5cbiAgICBhbGxUZXh0UmVzdWx0ID1cbiAgICAgIFwiQ2hhcmFjdGVycyA6ICN7Y2hhcnNDb3VudH3jgIBXb3JkcyA6ICN7d29yZHNDb3VudH3jgIBMaW5lcyA6ICN7bGluZXNDb3VudH1cIlxuICAgIEBlbGVtZW50LmNoaWxkcmVuWzFdLnRleHRDb250ZW50ID0gYWxsVGV4dFJlc3VsdFxuXG4gICAgaWYgc2VsZWN0ZWRDaGFyc0NvdW50ID4gMFxuICAgICAgQGVsZW1lbnQuY2hpbGRyZW5bMl0uY2xhc3NMaXN0LnJlbW92ZSgnY291bnQtaGlkZGVuJylcbiAgICAgIEBlbGVtZW50LmNoaWxkcmVuWzNdLmNsYXNzTGlzdC5yZW1vdmUoJ2NvdW50LWhpZGRlbicpXG4gICAgICBzZWxlY3RlZFRleHRSZXN1bHQgPVxuICAgICAgICBcIkNoYXJhY3RlcnMgOiAje3NlbGVjdGVkQ2hhcnNDb3VudH3jgIBXb3JkcyA6ICN7c2VsZWN0ZWRXb3Jkc0NvdW50feOAgExpbmVzIDogI3tzZWxlY3RlZExpbmVzQ291bnR9XCJcbiAgICAgIEBlbGVtZW50LmNoaWxkcmVuWzNdLnRleHRDb250ZW50ID0gc2VsZWN0ZWRUZXh0UmVzdWx0XG4gICAgZWxzZVxuICAgICAgQGVsZW1lbnQuY2hpbGRyZW5bMl0uY2xhc3NMaXN0LmFkZCgnY291bnQtaGlkZGVuJylcbiAgICAgIEBlbGVtZW50LmNoaWxkcmVuWzNdLmNsYXNzTGlzdC5hZGQoJ2NvdW50LWhpZGRlbicpXG4iXX0=