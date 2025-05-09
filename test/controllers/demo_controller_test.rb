require "test_helper"

class DemoControllerTest < ActionDispatch::IntegrationTest
  test "should get defer" do
    get demo_defer_url
    assert_response :success
  end
end
