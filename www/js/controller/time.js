angular.module("directives.daterangepicker", []).directive "dateRangePicker", ($compile, $parse) ->
    restrict: "E"
    require: "ngModel"
    link: ($scope, $element, $attributes, ngModel) ->
      format = (date) ->
        date.format options.format
      formatted = (dates) ->
        [format(dates.startDate), format(dates.endDate)].join options.separator
      options = {}
      options.format = $attributes.format or "MMM D, YYYY"
      options.separator = $attributes.separator or " - "
      options.opens = $attributes.opens or "left"
      options.minDate = $attributes.minDate and moment($attributes.minDate)
      options.maxDate = $attributes.maxDate and moment($attributes.maxDate)
      options.dateLimit = $attributes.limit and moment.duration.apply(this, $attributes.limit.split(" ").map((elem, index) ->
        index is 0 and parseInt(elem, 10) or elem
      ))
      options.ranges = $attributes.ranges and $parse($attributes.ranges)($scope)
      ngModel.$formatters.unshift (modelValue) ->
        return ""  unless modelValue
        modelValue

      ngModel.$parsers.unshift (viewValue) ->
        viewValue

      ngModel.$render = ->
        return  if not ngModel.$viewValue or not ngModel.$viewValue.startDate
        $element.find("span").html(formatted(ngModel.$viewValue))

      $scope.$watch $attributes.ngModel, (modelValue) ->
        if not modelValue or (not modelValue.startDate)
          ngModel.$setViewValue
            startDate: moment().startOf("day")
            endDate: moment().startOf("day")

          return
        $element.data("daterangepicker").startDate = modelValue.startDate
        $element.data("daterangepicker").endDate = modelValue.endDate
        $element.data("daterangepicker").minDate = modelValue.minDate
        $element.data("daterangepicker").maxDate = modelValue.maxDate
        $element.data("daterangepicker").updateView()
        $element.data("daterangepicker").updateCalendars()
        #$element.data("daterangepicker").updateInputText()

      $element.daterangepicker options, (start, end) ->
        alert "$apply#{moment(start).toDate()}"
        alert options.maxDate
        $scope.$apply ->
          ngModel.$setViewValue
            startDate: start
            endDate: end

          ngModel.$render()



) 