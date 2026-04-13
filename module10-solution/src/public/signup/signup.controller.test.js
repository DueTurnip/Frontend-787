describe('SignupController', function() {
  var ctrl;
  var $httpBackend;
  var UserService;

  beforeEach(module('public'));

  beforeEach(inject(function($controller, _$httpBackend_, _UserService_) {
    $httpBackend = _$httpBackend_;
    UserService = _UserService_;

    ctrl = $controller('SignupController', {
      UserService: UserService
    });
  }));

  it('should find a valid menu item and set menuError to false', function() {
    var mockMenuItem = {
      name: 'Orange Chicken',
      description: 'chunks of chicken...',
      short_name: 'L1'
    };

    ctrl.user.menuItem = 'L1';

    $httpBackend
      .whenGET('https://coursera-jhu-default-rtdb.firebaseio.com/menu_items/L/menu_items/0.json')
      .respond(200, mockMenuItem);

    ctrl.checkMenuItem();
    $httpBackend.flush();

    expect(ctrl.menuError).toBe(false);
    expect(ctrl.menuItem).toEqual(mockMenuItem);
  });

  it('should set menuError to true when menu item does not exist', function() {
    ctrl.user.menuItem = 'L99';

    $httpBackend
      .whenGET('https://coursera-jhu-default-rtdb.firebaseio.com/menu_items/L/menu_items/98.json')
      .respond(200, null);

    ctrl.checkMenuItem();
    $httpBackend.flush();

    expect(ctrl.menuError).toBe(true);
    expect(ctrl.menuItem).toBe(null);
  });
});


