using backend.Models;
using backend.Settings;
using Microsoft.Extensions.Options;
using MongoDB.Driver;

namespace backend.Services;

public class TodoService
{
    private readonly IMongoCollection<TodoItem> _todos;

    public TodoService(IOptions<MongoDbSettings> settings)
    {
        var mongoSettings = settings.Value;

        var client = new MongoClient(mongoSettings.ConnectionString);
        var database = client.GetDatabase(mongoSettings.DatabaseName);

        _todos = database.GetCollection<TodoItem>("todos");
    }

    public async Task<List<TodoItem>> GetAllAsync() =>
        await _todos.Find(_ => true).ToListAsync();

    public async Task<TodoItem?> GetByIdAsync(string id) =>
        await _todos.Find(t => t.Id == id).FirstOrDefaultAsync();

    public async Task CreateAsync(TodoItem item) =>
        await _todos.InsertOneAsync(item);

    public async Task DeleteAsync(string id) =>
        await _todos.DeleteOneAsync(t => t.Id == id);
}
