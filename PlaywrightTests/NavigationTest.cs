using Microsoft.Playwright.NUnit;

namespace PlaywrightTests;

[Parallelizable(ParallelScope.Self)]
[TestFixture]
public class NavigationTest : PageTest
{
    const string URL = "http://localhost:5085/";

    [SetUp]
    public async Task Setup()
    {
        await Page.GotoAsync(URL);
    }

    [Test]
    public async Task HomepageShouldHaveExpectedUrl()
    {
        await Expect(Page).ToHaveURLAsync(URL);
    }
}
