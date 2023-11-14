using System.Reflection;

namespace TehBilly.CSharp.SomeLibrary;

public interface ISomeLibrary
{
    public string Version();
    public string FlipAString(string input);
}

public class SomeLibrary : ISomeLibrary
{
    public string Version() => System.Diagnostics.FileVersionInfo
        .GetVersionInfo(Assembly.GetExecutingAssembly().Location)
        .FileVersion!;

    public string FlipAString(string input)
    {
        var chars = input.ToCharArray();
        Array.Reverse(chars);
        return new string(chars);
    }
}
